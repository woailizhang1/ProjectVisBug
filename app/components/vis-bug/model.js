import * as Icons from './vis-bug.icons'
import { metaKey, altKey } from '../../utilities/'
import { t, initLanguage, getLanguage } from '../../utilities/i18n'

// 初始化语言
initLanguage()

export const VisBugModel = {
  g: {
    tool:        'guides',
    icon:        Icons.guides,
    get label() { return t('guides.label') },
    get description() { return t('guides.description') },
    get instruction() { 
      return `<div table>
                <div>
                  <b>${t('guides.element_guides')}</b>
                  <span>${t('guides.hover')}</span>
                </div>
                <div>
                  <b>${t('guides.measure')}</b>
                  <span>${t('guides.click_hover')}</span>
                </div>
                <div>
                  <b>${t('guides.measure_many')}</b>
                  <span>${t('guides.shift_click')}</span>
                </div>
                <div>
                  <b>${t('guides.clear')}</b>
                  <span>${t('guides.esc')}</span>
                </div>
              </div>` 
    },
  },
  i: {
    tool:        'inspector',
    icon:        Icons.inspector,
    get label() { return t('inspector.label') },
    get description() { return t('inspector.description') },
    get instruction() { 
      return `<div table>
                <div>
                  <b>${t('inspector.pin_it')}</b>
                  <span>${t('inspector.click')}</span>
                </div>
                <div>
                  <b>${t('inspector.pin_many')}</b>
                  <span>${t('inspector.shift_click')}</span>
                </div>
                <div>
                  <b>${t('inspector.position_it')}</b>
                  <span>${t('inspector.click_drag')}</span>
                </div>
                <div>
                  <b>${t('guides.clear')}</b>
                  <span>${t('guides.esc')}</span>
                </div>
              </div>`
    },
  },
  x: {
    tool:        'accessibility',
    icon:        Icons.accessibility,
    get label() { return t('accessibility.label') },
    get description() { return t('accessibility.description') },
    get instruction() { 
      return `<div table>
                <div>
                  <b>${t('inspector.pin_it')}</b>
                  <span>${t('inspector.click')}</span>
                </div>
                <div>
                  <b>${t('inspector.pin_many')}</b>
                  <span>${t('inspector.shift_click')}</span>
                </div>
                <div>
                  <b>${t('guides.clear')}</b>
                  <span>${t('guides.esc')}</span>
                </div>
              </div>`
    },
  },
  l: {
    tool:        'position',
    icon:        Icons.position,
    get label() { return t('position.label') },
    get description() { return t('position.description') },
    get instruction() { 
      return `<div table>
                <div>
                  <b>${t('position.nudge')}</b>
                  <span>${t('position.arrows')}</span>
                </div>
                <div>
                  <b>${t('position.place')}</b>
                  <span>${t('position.click_drag')}</span>
                </div>
                <div>
                  <b>${t('position.restore')}</b>
                  <span>${altKey} + delete</span>
                </div>
              </div>`
    },
  },
  m: {
    tool:        'margin',
    icon:        Icons.margin,
    get label() { return t('margin.label') },
    get description() { return t('margin.description') },
    get instruction() { 
      return `<div table>
                <div>
                  <b>${t('margin.add_margin')}</b>
                  <span>${t('margin.arrows')}</span>
                </div>
                <div>
                  <b>${t('margin.subtract_margin')}</b>
                  <span>${altKey} + ${t('margin.arrows')}</span>
                </div>
                <div>
                  <b>${t('margin.all_sides')}</b>
                  <span>${metaKey} + ▲ ▼</span>
                </div>
                <div>
                  <b>${t('margin.trainer')}</b>
                  <span>${t('margin.shift_slash')}</span>
                </div>
              </div>`
    },
  },
  p: {
    tool:        'padding',
    icon:        Icons.padding,
    get label() { return t('padding.label') },
    get description() { return t('padding.description') },
    get instruction() { 
      return `<div table>
                <div>
                  <b>${t('padding.add_padding')}</b>
                  <span>${t('margin.arrows')}</span>
                </div>
                <div>
                  <b>${t('padding.subtract_padding')}</b>
                  <span>${altKey} + ${t('margin.arrows')}</span>
                </div>
                <div>
                  <b>${t('padding.all_sides')}</b>
                  <span>${metaKey} + ▲ ▼</span>
                </div>
                <div>
                  <b>${t('padding.trainer')}</b>
                  <span>${t('margin.shift_slash')}</span>
                </div>
              </div>`
    },
  },
  a: {
    tool:        'align',
    icon:        Icons.align,
    get label() { return t('align.label') },
    get description() { return t('align.description') },
    get instruction() { 
      return `<div table>
                <div>
                  <b>${t('align.rows')}</b>
                  <span>${metaKey} + ▼</span>
                </div>
                <div>
                  <b>${t('align.columns')}</b>
                  <span>${metaKey} + ▶</span>
                </div>
                <div>
                  <b>${t('align.alignment')}</b>
                  <span>${t('margin.arrows')}</span>
                </div>
                <div>
                  <b>${t('align.distribution')}</b>
                  <span>${t('align.shift_arrows')}</span>
                </div>
                <div>
                  <b>${t('align.order')}</b>
                  <span>${metaKey} + shift + ◀ ▶</span>
                </div>
                <div>
                  <b>${t('align.wrapping')}</b>
                  <span>${metaKey} + shift + ▲ ▼</span>
                </div>
                <div>
                  <b>${t('align.trainer')}</b>
                  <span>${t('margin.shift_slash')}</span>
                </div>
              </div>`
    },
  },
  v: {
    tool:        'move',
    icon:        Icons.move,
    get label() { return t('move.label') },
    get description() { return t('move.description') },
    get instruction() { 
      return `<div table>
                <div>
                  <b>${t('move.lateral_container')}</b>
                  <span>${t('move.lateral')}</span>
                </div>
                <div>
                  <b>${t('move.lateral_container')}</b>
                  <span>◀ ▶</span>
                </div>
                <div>
                  <b>${t('move.out_above')}</b>
                  <span>▲</span>
                </div>
                <div>
                  <b>${t('move.down_in')}</b>
                  <span>▼</span>
                </div>
                <div>
                  <b>${t('margin.trainer')}</b>
                  <span>${t('margin.shift_slash')}</span>
                </div>
              </div>`
    },
  },
  h: {
    tool:        'hueshift',
    icon:        Icons.hueshift,
    get label() { return t('hueshift.label') },
    get description() { return '' },
    get instruction() { 
      return `<div table>
                <div>
                  <b>${t('hueshift.saturation')}</b>
                  <span>◀ ▶</span>
                </div>
                <div>
                  <b>${t('hueshift.brightness')}</b>
                  <span>▲ ▼</span>
                </div>
                <div>
                  <b>${t('hueshift.hue')}</b>
                  <span>${metaKey} + ▲ ▼</span>
                </div>
                <div>
                  <b>${t('hueshift.opacity')}</b>
                  <span>${metaKey} + ◀ ▶</span>
                </div>
                <div>
                  <b>${t('margin.trainer')}</b>
                  <span>${t('margin.shift_slash')}</span>
                </div>
              </div>`
    },
  },
  d: {
    tool:        'boxshadow',
    icon:        Icons.boxshadow,
    get label() { return t('boxshadow.label') },
    get description() { return '' },
    get instruction() { 
      return `<div table>
                <div>
                  <b>${t('boxshadow.xy_position')}</b>
                  <span>◀ ▶ ▲ ▼</span>
                </div>
                <div>
                  <b>${t('boxshadow.blur')}</b>
                  <span>${altKey} + ▲ ▼</span>
                </div>
                <div>
                  <b>${t('boxshadow.spread')}</b>
                  <span>${altKey} + ◀ ▶</span>
                </div>
                <div>
                  <b>${t('boxshadow.opacity')}</b>
                  <span>${metaKey} + ◀ ▶</span>
                </div>
              </div>`
    },
  },
  f: {
    tool:        'font',
    icon:        Icons.font,
    get label() { return t('font.label') },
    get description() { return '' },
    get instruction() { 
      return `<div table>
                <div>
                  <b>${t('font.size')}</b>
                  <span>▲ ▼</span>
                </div>
                <div>
                  <b>${t('font.alignment')}</b>
                  <span>◀ ▶</span>
                </div>
                <div>
                  <b>${t('font.leading')}</b>
                  <span>Shift + ▲ ▼</span>
                </div>
                <div>
                  <b>${t('font.letter_spacing')}</b>
                  <span>Shift + ◀ ▶</span>
                </div>
                <div>
                  <b>${t('font.weight')}</b>
                  <span>${metaKey} + ▲ ▼</span>
                </div>
                <div>
                  <b>${t('margin.trainer')}</b>
                  <span>${t('margin.shift_slash')}</span>
                </div>
              </div>`
    },
  },
  e: {
    tool:        'text',
    icon:        Icons.text,
    get label() { return t('text.label') },
    get description() { return t('text.description') },
    get instruction() { return '' },
  },
  s: {
    tool:        'search',
    icon:        Icons.search,
    get label() { return t('search.label') },
    get description() { return t('search.description') },
    get instruction() { return '' },
  },
}
