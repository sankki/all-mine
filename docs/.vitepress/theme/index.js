import theme from 'vitepress/dist/client/theme-default'
import 'vitepress-theme-demoblock/theme/styles/index.css'
import allMine from '../../../package/index'
import { registerComponents } from './register-components.js'
import './index.scss';

export default {
    ...theme,
    enhanceApp({ app, router, siteData }) {
        app.use(allMine);
        registerComponents(app)
    }
}
