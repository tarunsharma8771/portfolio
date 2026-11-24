// Copy these schema definitions into your Sanity Studio configuration.
// Studio is managed separately to keep the public Next.js app read-only.
export const schemas = [
  { name: "article", title: "Article", type: "document", fields: [
    { name:"title",title:"Title",type:"string",validation:(Rule: {required:()=>unknown})=>Rule.required() },
    { name:"url",title:"Published URL",type:"url" },
    { name:"summary",title:"Summary",type:"text" },
    { name:"publishedAt",title:"Published at",type:"datetime" },
  ]},
  { name:"video",title:"Video",type:"document",fields:[
    {name:"title",title:"Title",type:"string"},
    {name:"url",title:"YouTube URL",type:"url"},
    {name:"publishedAt",title:"Published at",type:"datetime"},
  ]},
  { name:"project",title:"Project",type:"document",fields:[
    {name:"title",title:"Title",type:"string"},
    {name:"description",title:"Description",type:"text"},
    {name:"url",title:"Project URL",type:"url"},
    {name:"status",title:"Status",type:"string",options:{list:["Classroom example","Proposed","In progress","Completed"]}},
  ]},
];
