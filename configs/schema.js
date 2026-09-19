import { pgTable, serial, text, integer, timestamp } from "drizzle-orm/pg-core";

export const courses = pgTable("courses", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description").notNull(),
  fullDescription: text("full_description"),
  image: text("image").notNull(),
  category: text("category").notNull(),
  duration: text("duration").notNull(),
  instructor: text("instructor").notNull(),
  level: text("level").default("Beginner"),
  price: text("price").default("Free"),
  badge: text("badge").default("Popular"),
  keyFeatures: text("key_features"),
  tags: text("tags"),
  modules: text("modules"),
  testimonial: text("testimonial"),
  keyOutcome: text("key_outcome"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const announcements = pgTable("announcements", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  imageUrl: text("image_url").notNull(),
  link: text("link"),
  badgeText: text("badge_text").default("Announcement"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const enrollments = pgTable("enrollments", {
  id: serial("id").primaryKey(),
  userName: text("user_name").notNull(),
  userEmail: text("user_email").notNull(),
  phone: text("phone").notNull(),
  collegeName: text("college_name").notNull(),
  department: text("department").notNull(),
  courseId: integer("course_id"),
  courseTitle: text("course_title").notNull(),
  status: text("status").default("pending").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  name: text("name").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const admin = pgTable("admin", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  name: text("name").notNull(),
  role: text("role").default("admin"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const userprofile = pgTable("userprofile", {
  id: serial("id").primaryKey(),
  fullName: text("full_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  collegeName: text("college_name"),
  department: text("department"),
  createdAt: timestamp("created_at").defaultNow(),
});
