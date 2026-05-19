import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        aboutUs: resolve(__dirname, 'about-us/index.html'),
        missionVision: resolve(__dirname, 'mission-vision/index.html'),
        leadership: resolve(__dirname, 'leadership/index.html'),
        careers: resolve(__dirname, 'careers/index.html'),
        industries: resolve(__dirname, 'industries/index.html'),
        contact: resolve(__dirname, 'contact/index.html'),
        smartSchoolPlus: resolve(__dirname, 'platforms/smartschoolplus/index.html'),
        hiGrade: resolve(__dirname, 'platforms/higrade-solutions/index.html'),
        acmeErp: resolve(__dirname, 'platforms/acme-erp/index.html'),
        microfund: resolve(__dirname, 'platforms/microfund/index.html'),
        medsysb: resolve(__dirname, 'platforms/medsysb/index.html'),
        cristoSuite: resolve(__dirname, 'platforms/cristo-suite/index.html'),
        eaudithub: resolve(__dirname, 'platforms/eaudithub/index.html'),
        aiTransformation: resolve(__dirname, 'services/ai-transformation-automation/index.html'),
        integration: resolve(__dirname, 'services/integration-digital-ecosystems/index.html'),
        saasEngineering: resolve(__dirname, 'services/saas-engineering-modernization/index.html'),
        erpCrm: resolve(__dirname, 'services/erp-crm-platform-implementation/index.html'),
        dataAnalytics: resolve(__dirname, 'services/data-analytics-ai/index.html'),
        cloudInfrastructure: resolve(__dirname, 'services/cloud-infrastructure-support/index.html'),
        technologyEcosystem: resolve(__dirname, 'services/technology-ecosystem-partnerships/index.html'),
      }
    }
  }
});
