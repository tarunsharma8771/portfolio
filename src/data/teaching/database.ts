import type { TeachingCaseStudy } from "@/types/teaching";

export const databaseCases: TeachingCaseStudy[] = [
  {
    id: "03",
    title: "Designing a relational database for library loans",
    category: "database",
    categoryLabel: "Database Management Systems",
    status: "delivered",
    problem:
      "A library keeps separate files for books, borrowers, loans, and fines. As borrowing grows, duplicate records and conflicting loan information become harder to reconcile.",
    classroomActivity:
      "Students examine the limitations of the file-based system and identify the entities, relationships, and constraints the library needs.",
    approach:
      "Translate the borrowing rules into an entity–relationship model, then use relational tables, keys, constraints, and SQL to represent them.",
    learningOutcomes: [
      "Explain how separate files can introduce redundancy and inconsistency.",
      "Model a borrowing workflow as a relational schema.",
      "Use keys and constraints to represent data integrity rules.",
      "Implement and query a relational database using SQL.",
    ],
    technologies: [
      "DBMS",
      "ER Modelling",
      "MySQL",
      "DDL",
      "DML",
      "Data Integrity",
      "Relational Schema",
    ],
    featured: true,
  },
  {
    id: "04",
    title: "Modelling the data behind an online learning platform",
    category: "database",
    categoryLabel: "Database Management Systems",
    status: "delivered",
    problem:
      "An online learning platform manages learners, instructors, courses, enrolments, payments, and progress. One person can hold multiple roles, and courses can follow different delivery models.",
    classroomActivity:
      "Students identify requirements, model relationships, and specify how many records can participate in each relationship.",
    approach:
      "Begin with entity–relationship diagrams, then extend the model with subtypes and participation rules where the requirements call for them.",
    learningOutcomes: [
      "Translate platform requirements into a data model.",
      "Represent relationships using cardinality and participation constraints.",
      "Use supertypes and subtypes to model shared and role-specific data.",
      "Explain how the model can accommodate additional roles or delivery models.",
    ],
    technologies: [
      "ER Modelling",
      "EER Modelling",
      "Cardinality",
      "Specialization",
      "Inheritance",
      "MySQL Workbench",
    ],
    featured: false,
  },
  {
    id: "05",
    title: "Answering multi-table questions with SQL",
    category: "database",
    categoryLabel: "Database Management Systems",
    status: "delivered",
    problem:
      "A university library network needs to compare book prices and availability across branches and reuse frequently performed calculations.",
    classroomActivity:
      "Students break reporting questions into smaller queries, combine records across tables, and implement reusable database functions.",
    approach:
      "Build from basic queries to joins, subqueries, and aggregation, then show how stored functions and procedures can encapsulate recurring operations.",
    learningOutcomes: [
      "Translate a reporting question into a SQL query.",
      "Combine and summarise data using joins, subqueries, and aggregate functions.",
      "Implement reusable calculations with stored functions.",
      "Explain when a recurring operation could be handled by a stored procedure.",
    ],
    technologies: [
      "SQL",
      "Subqueries",
      "Joins",
      "Aggregate Functions",
      "Stored Functions",
      "Stored Procedures",
      "MySQL",
    ],
    featured: false,
  },
];
