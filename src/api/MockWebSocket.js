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

  send(data) {
    const parsedData = JSON.parse(data)

    setTimeout(() => {
      this.onmessage?.({
        data: JSON.stringify({
          id: Date.now(),
          userId: 99,
          name: 'MockBot',
          message: `Привіт, ${parsedData.name}! Я почув: "${parsedData.message}"`,
          sentAt: new Date().toISOString(),
        }),
      })
    }, 1000)
  }

  close() {
    this.readyState = 3 // CLOSED
    this.onclose?.()
  }
}
