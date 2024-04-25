export const formatDate = (date: Date) => {
  const event = new Date(date) // ввод даты, представленной как строка

  const day = ('0' + event.getDate()).slice(-2)
  const month = ('0' + (event.getMonth() + 1)).slice(-2)
  const year = event.getFullYear()
  const hours = ('0' + event.getHours()).slice(-2)
  const minutes = ('0' + event.getMinutes()).slice(-2)

  const formattedDate = `${day}.${month}.${year} ${hours}:${minutes}` // форматируем дату вместе с временем
  return formattedDate
}
