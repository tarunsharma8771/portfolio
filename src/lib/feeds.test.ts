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
});
