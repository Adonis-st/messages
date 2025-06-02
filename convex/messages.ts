import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const send = mutation({
  args: {
    text: v.string(),
    fromUserId: v.string(),
    toUserId: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("messages", {
      text: args.text,
      fromUserId: args.fromUserId,
      toUserId: args.toUserId,
    });
  },
});

export const getMessages = query({
  args: {
    fromUserId: v.string(),
    toUserId: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.query("messages").order("desc").collect();
  },
});
