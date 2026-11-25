import { describe, expect, it } from "vitest";
import { dedupeByHref } from "./feeds";
describe("dedupeByHref", () => {
  it("removes duplicate canonical links", () => {
    const items = [{ href:"https://example.com/article?source=rss",title:"One" },{href:"https://example.com/article",title:"Two"}];
    expect(dedupeByHref(items)).toEqual([items[0]]);
  });
  it("keeps distinct links", () => {
    expect(dedupeByHref([{href:"https://example.com/a"},{href:"https://example.com/b"}])).toHaveLength(2);
  });
  it("keeps distinct YouTube videos and merges alternate links to the same video", () => {
    const first = { href: "https://www.youtube.com/watch?v=example001" };
    const second = { href: "https://www.youtube.com/watch?v=example002" };
    expect(dedupeByHref([
      first,
      second,
      { href: "https://www.youtube.com/watch?si=share&v=example001" },
      { href: "https://youtu.be/example001?t=20" },
      { href: "https://www.youtube.com/shorts/example002" },
    ])).toEqual([first, second]);
  });
});
