import { authTables } from "@convex-dev/auth/server";
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

const schema = defineSchema({
  ...authTables,
  messages: defineTable({
    text: v.string(),
    fromUserId: v.string(),
    toUserId: v.string(),
  }),
});

export default schema;
