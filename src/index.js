import m from 'mithril'
import routes from './routes'
import './styles.scss'

m.route.prefix('')
m.route(document.body, '/', routes)
