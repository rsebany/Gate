import { useLanguage } from '../context/LanguageContext'
import { portfolioEn, type PortfolioData } from '../data/portfolioEn'
import { portfolioFr } from '../data/portfolioFr'

export function usePortfolio(): PortfolioData {
  const { lang } = useLanguage()
  return lang === 'fr' ? portfolioFr : portfolioEn
}
