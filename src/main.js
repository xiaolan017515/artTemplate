/**
 * Created by txl-pc on 2017/8/6.
 */
import $ from 'jquery'
import template from 'art-template'
import art1 from './art/art1.art'
import art2 from './art/art2.html'
import art3 from './art/art3.html'
// let render1 = template.compile(art1)
let html1 = art1({
  name: '小胖',
  age: 18,
  height: 183,
  'honme list': 'shijicheng'
})
$('#art1').html(html1)

let render2 = template.compile(art2)
let html2 = render2({
  pages: {
    totalPage: '总页数',
    page: 9,
    "page list": "分开了",
    value: '<p>哈哈哈哈哈哈哈哈</p>'
  }
})
$('#art2').html(html2)

let render3 = template.compile(art3)
let html3 = render3({
  forName: [
    {
      name: '王胖子',
      value: '7893'
    },
    {
      name: '邓胖子',
      value: '1893'
    }
  ]
})
$('#art3').html(html3)