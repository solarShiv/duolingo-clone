CREATE TABLE IF NOT EXISTS "todo" (
	"id" integer PRIMARY KEY NOT NULL,
	"text" text NOT NULL,
	"done" boolean DEFAULT false NOT NULL
);
--> statement-breakpoint
DROP TABLE "challenge_options";--> statement-breakpoint
DROP TABLE "challenge_progress";--> statement-breakpoint
DROP TABLE "challenges";--> statement-breakpoint
DROP TABLE "courses";--> statement-breakpoint
DROP TABLE "lessons";--> statement-breakpoint
DROP TABLE "units";--> statement-breakpoint
DROP TABLE "user_progress";--> statement-breakpoint
DROP TABLE "user_subscription";