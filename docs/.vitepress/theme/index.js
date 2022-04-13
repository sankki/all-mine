import theme from 'vitepress/dist/client/theme-default'
import 'vitepress-theme-demoblock/theme/styles/index.css'
import allMine from '../../../lib/all-mine.es'
import '../../../lib/style.css';
import { registerComponents } from './register-components.js'
import './index.scss';

export default {
    ...theme,
    enhanceApp({ app, router, siteData }) {
        app.use(allMine);
        registerComponents(app)
    }
}
