// 多语言支持系统
const translations = {
  en: {
    // Tools
    'guides.label': '<span><u>G</u>uides</span>',
    'guides.description': 'Verify alignment & measure distances',
    'guides.element_guides': 'Element Guides:',
    'guides.hover': 'hover',
    'guides.measure': 'Measure:',
    'guides.click_hover': 'click+hover',
    'guides.measure_many': 'Measure many:',
    'guides.shift_click': 'shift+click',
    'guides.clear': 'Clear:',
    'guides.esc': 'esc',

    'inspector.label': '<span><u>I</u>nspect</span>',
    'inspector.description': 'Inspect the common styles of an element',
    'inspector.pin_it': 'Pin it:',
    'inspector.pin_many': 'Pin many:',
    'inspector.position_it': 'Position it:',
    'inspector.click_drag': 'click & drag by the header area',
    'inspector.click': 'click',
    'inspector.shift_click': 'shift+click',

    'accessibility.label': 'Accessibility',
    'accessibility.description': 'Inspect attributes & contrast compliance',
    'accessibility.foreground': 'Foreground',
    'accessibility.background': 'Background',
    'accessibility.foreground_matches': 'Foreground matches background',
    'accessibility.wcag_compliance': 'WCAG Compliance',

    'position.label': 'Position',
    'position.description': 'Grab and position elements anywhere',
    'position.nudge': 'Nudge:',
    'position.arrows': '◀ ▶ ▲ ▼',
    'position.place': 'Place:',
    'position.click_drag': 'Click & drag',
    'position.restore': 'Restore:',
    'position.alt_delete': `${getAltKey()} + delete`,

    'margin.label': '<span><u>M</u>argin</span>',
    'margin.description': 'Adjust spacing outside',
    'margin.add_margin': '+ Margin:',
    'margin.subtract_margin': '- Margin:',
    'margin.all_sides': 'All Sides:',
    'margin.trainer': 'Trainer:',
    'margin.arrows': '◀ ▶ ▲ ▼',
    'margin.alt_arrows': `${getAltKey()} + ◀ ▶ ▲ ▼`,
    'margin.meta_arrows': `${getMetaKey()} + ▲ ▼`,
    'margin.shift_slash': 'shift + /',

    'padding.label': '<span><u>P</u>adding</span>',
    'padding.description': 'Adjust spacing within',
    'padding.add_padding': '+ Padding:',
    'padding.subtract_padding': '- Padding:',
    'padding.all_sides': 'All Sides:',
    'padding.trainer': 'Trainer:',

    'align.label': '<span>Flexbox <u>A</u>lign</span>',
    'align.description': 'Adjust flexbox layout features',
    'align.rows': 'Rows:',
    'align.columns': 'Columns:',
    'align.alignment': 'Alignment:',
    'align.distribution': 'Distribution:',
    'align.order': 'Order:',
    'align.wrapping': 'Wrapping:',
    'align.trainer': 'Trainer:',
    'align.shift_arrows': 'Shift + ◀ ▶',
    'align.shift_updown': 'Shift + ▲ ▼',
    'align.meta_shift_arrows': `${getMetaKey()} + shift + ◀ ▶`,
    'align.meta_shift_updown': `${getMetaKey()} + shift + ▲ ▼`,

    'move.label': '<span>Mo<u>v</u>e</span>',
    'move.description': 'Change the position of elements',
    'move.lateral_container': 'Lateral:',
    'move.lateral': 'click container ⇒ drag child',
    'move.out_above': 'Out and above:',
    'move.down_in': 'Down+in, out+under:',

    'hueshift.label': '<span><u>H</u>ue Shift</span>',
    'hueshift.saturation': 'Saturation:',
    'hueshift.brightness': 'Brightness:',
    'hueshift.hue': 'Hue:',
    'hueshift.opacity': 'Opacity:',

    'boxshadow.label': '<span>Box Sha<u>d</u>ows</span>',
    'boxshadow.xy_position': 'X/Y Position:',
    'boxshadow.blur': 'Blur:',
    'boxshadow.spread': 'Spread:',
    'boxshadow.opacity': 'Opacity:',

    'font.label': '<span><u>F</u>ont Styles</span>',
    'font.size': 'Size:',
    'font.alignment': 'Alignment:',
    'font.leading': 'Leading:',
    'font.letter_spacing': 'Letter-spacing:',
    'font.weight': 'Weight:',

    'text.label': '<span><u>E</u>dit Text</span>',
    'text.description': 'Just <b>Double click</b> any text on the page',

    'search.label': '<span><u>S</u>earch</span>',
    'search.description': 'Select elements programatically by searching for them or use built in plugins with special commands',
    'search.placeholder': 'ex: images, .btn, button, text, ...',
    'search.example': 'example',
    'search.alias': 'alias',

    'language.label': '<span><u>N</u>Language</span>',
    'language.description': 'Switch between English and Chinese languages',
    'language.english': 'English:',
    'language.chinese': '中文:',
    'language.click_switch': 'Click to switch',
    'language.dianji_qiehuan': '点击切换',

    // Color buttons
    'color.foreground': 'Text',
    'color.foreground_description': 'Change the text color',
    'color.background': 'Background or Fill',
    'color.background_description': 'Change the background color or fill of svg',
    'color.border': 'Border or Stroke',
    'color.border_description': 'Change the border color or stroke of svg',
  },

  zh: {
    // Tools
    'guides.label': '<span><u>G</u>uides（标尺）</span>',
    'guides.description': '验证对齐并测量距离',
    'guides.element_guides': '元素标尺：',
    'guides.hover': '悬停',
    'guides.measure': '测量：',
    'guides.click_hover': '点击+悬停',
    'guides.measure_many': '测量多个：',
    'guides.shift_click': 'shift+点击',
    'guides.clear': '清除：',
    'guides.esc': 'esc',

    'inspector.label': '<span><u>I</u>nspect（检查器）</span>',
    'inspector.description': '检查元素的常见样式',
    'inspector.pin_it': '固定：',
    'inspector.pin_many': '固定多个：',
    'inspector.position_it': '定位：',
    'inspector.click_drag': '拖动标题移动面板',
    'inspector.click': '点击',
    'inspector.shift_click': 'shift+点击',

    'accessibility.label': 'Accessibility（无障碍）',
    'accessibility.description': '检查属性和对比度合规性',
    'accessibility.foreground': '前景色',
    'accessibility.background': '背景色',
    'accessibility.foreground_matches': '前景色与背景色相同',
    'accessibility.wcag_compliance': 'WCAG 合规性',

    'position.label': 'Position（位置）',
    'position.description': '抓取并定位元素到任何位置',
    'position.nudge': '微调：',
    'position.arrows': '◀ ▶ ▲ ▼',
    'position.place': '放置：',
    'position.click_drag': '点击并拖动',
    'position.restore': '恢复：',
    'position.alt_delete': `${getAltKey()} + delete`,

    'margin.label': '<span><u>M</u>argin（外边距）</span>',
    'margin.description': '调整外部间距',
    'margin.add_margin': '+ 外边距：',
    'margin.subtract_margin': '- 外边距：',
    'margin.all_sides': '所有边：',
    'margin.trainer': '训练：',
    'margin.arrows': '◀ ▶ ▲ ▼',
    'margin.alt_arrows': `${getAltKey()} + ◀ ▶ ▲ ▼`,
    'margin.meta_arrows': `${getMetaKey()} + ▲ ▼`,
    'margin.shift_slash': 'shift + /',

    'padding.label': '<span><u>P</u>adding（内边距）</span>',
    'padding.description': '调整内部间距',
    'padding.add_padding': '+ 内边距：',
    'padding.subtract_padding': '- 内边距：',
    'padding.all_sides': '所有边：',
    'padding.trainer': '训练：',

    'align.label': '<span>Flexbox <u>A</u>lign（对齐）</span>',
    'align.description': '调整弹性盒布局特性',
    'align.rows': '行：',
    'align.columns': '列：',
    'align.alignment': '对齐：',
    'align.distribution': '分布：',
    'align.order': '顺序：',
    'align.wrapping': '换行：',
    'align.trainer': '训练：',
    'align.shift_arrows': 'Shift + ◀ ▶',
    'align.shift_updown': 'Shift + ▲ ▼',
    'align.meta_shift_arrows': `${getMetaKey()} + shift + ◀ ▶`,
    'align.meta_shift_updown': `${getMetaKey()} + shift + ▲ ▼`,

    'move.label': '<span>Mo<u>v</u>e（移动）</span>',
    'move.description': '改变元素的位置',
    'move.lateral_container': '横向：',
    'move.lateral': '点击容器 ⇒ 拖动子元素',
    'move.out_above': '向上移出：',
    'move.down_in': '向下进入，移出下方：',

    'hueshift.label': '<span><u>H</u>ue Shift（色相）</span>',
    'hueshift.saturation': '饱和度：',
    'hueshift.brightness': '亮度：',
    'hueshift.hue': '色相：',
    'hueshift.opacity': '不透明度：',

    'boxshadow.label': '<span>Box Sha<u>d</u>ows（阴影）</span>',
    'boxshadow.xy_position': 'X/Y 位置：',
    'boxshadow.blur': '模糊：',
    'boxshadow.spread': '扩散：',
    'boxshadow.opacity': '不透明度：',

    'font.label': '<span><u>F</u>ont Styles（字体样式）</span>',
    'font.size': '字号：',
    'font.alignment': '对齐：',
    'font.leading': '行高：',
    'font.letter_spacing': '字间距：',
    'font.weight': '字重：',

    'text.label': '<span><u>E</u>dit Text（编辑文本）</span>',
    'text.description': '只需<b>双击</b>页面上的任何文本',

    'search.label': '<span><u>S</u>earch（搜索）</span>',
    'search.description': '通过搜索选择元素，或使用带有特殊命令的内置插件',
    'search.placeholder': '例如：images、.btn、button、text、...',
    'search.example': '示例',
    'search.alias': '别名',

    'language.label': '<span><u>N</u>Language（语言）</span>',
    'language.description': '切换中英文语言',
    'language.english': 'English:',
    'language.chinese': '中文:',
    'language.click_switch': '点击切换',
    'language.dianji_qiehuan': '点击切换',
  },
}

// 获取 metaKey 和 altKey 的辅助函数（延迟解析）
function getMetaKey() {
  return typeof metaKey !== 'undefined' ? metaKey : 'cmd'
}

function getAltKey() {
  return typeof altKey !== 'undefined' ? altKey : 'alt'
}

let currentLang = 'en'

// 获取翻译
export function t(key) {
  const langData = translations[currentLang]
  return langData[key] || translations['en'][key] || key
}

// 获取当前语言
export function getLanguage() {
  return currentLang
}

// 设置语言
export function setLanguage(lang) {
  if (translations[lang]) {
    currentLang = lang
    localStorage.setItem('visbug_lang', lang)
    // 触发语言更改事件
    document.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }))
    return true
  }
  return false
}

// 切换语言
export function toggleLanguage() {
  const newLang = currentLang === 'en' ? 'zh' : 'en'
  return setLanguage(newLang)
}

// 初始化语言设置
export function initLanguage() {
  const savedLang = localStorage.getItem('visbug_lang')
  if (savedLang && translations[savedLang]) {
    currentLang = savedLang
  } else {
    // 默认使用中文
    currentLang = 'zh'
  }
  return currentLang
}

// 自动初始化语言（模块加载时执行）
initLanguage()
