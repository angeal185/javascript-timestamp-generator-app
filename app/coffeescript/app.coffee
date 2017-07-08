$ = document.querySelector.bind(document)
$text = $('.text')
$result = $('.result')
obj = 
  f_convert_date: (ts) ->
    exd = new Date(ts.slice(0, 10) / 1000)
    date = 
      d: if exd.getDate() < 10 then '0' + exd.getDate() else exd.getDate()
      m: if exd.getMonth() < 9 then '0' + exd.getMonth() + 1 else exd.getMonth() + 1
      y: exd.getFullYear()
    date.d + '/' + date.m + '/' + date.y
  f_reverse: (str) ->
    `var str`
    str = str.replace(/-|_|\/|[\s\.]/g, '-').split('-').reverse().join('-')
    new Date(str).valueOf() / 1000
error = 
  length: 'LENGTH ERROR'
  type: 'INPUT TYPE ERROR'

$text.oninput = ->
  data = @value.trim()
  if data.match(/^\d+$/g)
    $result.innerHTML = obj.f_convert_date(data)
  else if data.match(/-|_|\/|[\s\.]/g)
    $result.innerHTML = obj.f_reverse(data)
  return
