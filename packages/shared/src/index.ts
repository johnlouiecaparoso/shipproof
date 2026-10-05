import { z } from 'zod';

// Enums
export const PlanEnum = z.enum(['FREE', 'PRO']);
export type Plan = z.infer<typeof PlanEnum>;

export const ProjectSignalKindEnum = z.enum([
  'TESTS',
  'CI',
  'README_SETUP',
  'TS_STRICT',
  'FEATURE_PATTERN',
  'COMMITS',
]);
export type ProjectSignalKind = z.infer<typeof ProjectSignalKindEnum>;

export const RequirementCategoryEnum = z.enum([
  'AUTH',
  'BILLING',
  'DEVOPS',
  'LANGUAGE',
  'TESTING',
  'DATA',
  'OTHER',
]);
export type RequirementCategory = z.infer<typeof RequirementCategoryEnum>;

export const RequirementPriorityEnum = z.enum(['MUST', 'NICE']);
export type RequirementPriority = z.infer<typeof RequirementPriorityEnum>;

export const BriefStatusEnum = z.enum(['DRAFT', 'PUBLISHED', 'REVOKED']);
export type BriefStatus = z.infer<typeof BriefStatusEnum>;

export const BriefItemStateEnum = z.enum(['VERIFIED', 'PARTIAL', 'GAP']);
export type BriefItemState = z.infer<typeof BriefItemStateEnum>;

// Common schemas
export const UserSchema = z.object({
  id: z.string().uuid(),
  email: z.string().email(),
  name: z.string().nullable(),
  githubLogin: z.string().nullable(),
  plan: PlanEnum,
  createdAt: z.date(),
});
export type User = z.infer<typeof UserSchema>;

export const ProjectSchema = z.object({
  id: z.string().uuid(),
  userId: z.string().uuid(),
  githubRepoId: z.bigint(),
  fullName: z.string(),
  isPrivate: z.boolean(),
  primaryLanguage: z.string().nullable(),
  readmeSummary: z.string().nullable(),
  lastIndexedAt: z.date().nullable(),
});
export type Project = z.infer<typeof ProjectSchema>;

export const ProjectSignalSchema = z.object({
  id: z.string().uuid(),
  projectId: z.string().uuid(),
  kind: ProjectSignalKindEnum,
  value: z.any(),
  filePath: z.string().nullable(),
  commitSha: z.string().nullable(),
  checkedAt: z.date(),
});
export type ProjectSignal = z.infer<typeof ProjectSignalSchema>;

export const RequirementSchema = z.object({
  id: z.string().uuid(),
  jobPostId: z.string().uuid(),
  label: z.string(),
  category: RequirementCategoryEnum,
  priority: RequirementPriorityEnum,
  position: z.number(),
});
export type Requirement = z.infer<typeof RequirementSchema>;

export const BriefItemSchema = z.object({
  id: z.string().uuid(),
  briefId: z.string().uuid(),
  requirementId: z.string().uuid(),
  signalId: z.string().uuid().nullable(),
  state: BriefItemStateEnum,
  note: z.string().nullable(),
  suggestedFix: z.string().nullable(),
  hidden: z.boolean(),
});
export type BriefItem = z.infer<typeof BriefItemSchema>;

export const BriefSchema = z.object({
  id: z.string().uuid(),
  userId: z.string().uuid(),
  jobPostId: z.string().uuid(),
  slug: z.string(),
  status: BriefStatusEnum,
  score: z.number(),
  publishedAt: z.date().nullable(),
});
export type Brief = z.infer<typeof BriefSchema>;

// API response schemas
export const ApiErrorSchema = z.object({
  code: z.string(),
  message: z.string(),
  details: z.any().optional(),
});
export type ApiError = z.infer<typeof ApiErrorSchema>;
