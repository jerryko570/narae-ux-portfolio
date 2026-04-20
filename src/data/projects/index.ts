// contact - Home/About 공용이라 최상위로
export { contactLinks } from './home/contact'

// Home
import { HomeHeros } from './home'

export const home = {
  heros: HomeHeros,
}

// Smols
import {
  smolsHeros,
  smolsSections,
  smolsFeedbackData,
  smolsReviewPageContent,
  smolsReviewSummary,
  smolsReviewCategories,
  smolsReviewCategoryTheme,
  smolsInsightSummary,
  smolsReviewInsight,
  smolsStrategy,
  smolsUxStrategy,
  smolsUxPrinciples,
  smolsTransformations,
  smolsResult,
} from './smols'

export const smols = {
  heros: smolsHeros,
  sections: smolsSections,
  feedbackData: smolsFeedbackData,
  reviewPageContent: smolsReviewPageContent,
  reviewSummary: smolsReviewSummary,
  reviewCategories: smolsReviewCategories,
  reviewCategoryTheme: smolsReviewCategoryTheme,
  reviewInsight: smolsReviewInsight,
  insightSummary: smolsInsightSummary,
  strategy: smolsStrategy,
  uxStrategy: smolsUxStrategy,
  uxPrinciples: smolsUxPrinciples,
  transformations: smolsTransformations,
  result: smolsResult,
}
