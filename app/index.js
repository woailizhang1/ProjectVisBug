import VisBug from './components/vis-bug/vis-bug.element'
import { metaKey } from './utilities'
import { initLanguage } from './utilities/i18n'

// 初始化语言设置（确保在组件加载前完成）
initLanguage()

if ('ontouchstart' in document.documentElement)
  document.getElementById('mobile-info').style.display = ''

if (metaKey === 'ctrl')
  [...document.querySelectorAll('kbd')]
    .forEach(node => {
      node.textContent = node.textContent.replace('cmd','ctrl')
      node.textContent = node.textContent.replace('opt','alt')
    })
