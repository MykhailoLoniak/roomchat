export class MockWebSocket {
  constructor(url) {
    this.url = url
    this.readyState = 0 // CONNECTING
    this.onopen = null
    this.onmessage = null
    this.onclose = null

    // Імітація відкриття зʼєднання через 100мс
    setTimeout(() => {
      this.readyState = 1 // OPEN
      this.onopen?.()
    }, 100)
  }

  send(message) {
    console.log('📤 Надіслано:', message)

    const data = JSON.parse(message)

    // Імітація відповіді "бота" через 1 сек
    setTimeout(() => {
      this.onmessage?.({
        data: JSON.stringify({
          user: 'MockBot',
          text: `Привіт, ${data.user}! Я почув: "${data.text}"`,
        }),
      })
    }, 1000)
  }

  close() {
    this.readyState = 3 // CLOSED
    this.onclose?.()
  }
}
