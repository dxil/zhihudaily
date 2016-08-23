
const replaceUrl = (srcUrl) => srcUrl.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p')

const dateTime = (str) => {
  let year = str.slice(0, 4)
  let month = str.slice(4, 6)
  let day = str.slice(6, 8)
  let now = new Date()
  let dateArr = [year, month, day]
  let date = dateArr.join('/')
  let index = new Date(date).getDay()
  let week = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'][index]
  let nowdate = [now.getFullYear(), '0' + (now.getMonth() + 1), now.getDate()] // 获取今天的日期，用于比较是否是当天
  let nd = nowdate.join('')
  // 判断返回字段
  let dt = dateArr.join('')
  if (dt === nd) {
    return '今日热闻'
  } else {
    return month + '月' + day + '日 ' + week
  }
}

const formatTime = (timeStamp, fmt) => { // author: meizz
  if (!timeStamp) {
    return ''
  }
  var _timeStamp = parseInt(timeStamp)
  if (_timeStamp.toString().length === 10) {
    _timeStamp *= 1000
  }
  !fmt && (fmt = 'yyyy-MM-dd')

  var t = new Date(_timeStamp)

  var o = {
    'M+': t.getMonth() + 1, // 月份
    'd+': t.getDate(),      // 日
    'h+': t.getHours(),     // 小时
    'm+': t.getMinutes(),   // 分
    's+': t.getSeconds(),   // 秒
    'q+': Math.floor((t.getMonth() + 3) / 3), // 季度
    'S': t.getMilliseconds() // 毫秒
  }
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (t.getFullYear() + '').substr(4 - RegExp.$1.length))
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
  }
  return fmt
}

module.exports = {
  replaceUrl,
  dateTime,
  formatTime
}
