let initialized = false


const init = async () => {
    if (initialized) {
        return
    }
    process.env.order_events_stream = 'orders-dev-mehis'
    process.env.restaurant_notification_topic = 'restaurants-dev-mehis'
    process.env.restaurants_api   = "https://n9oh0sxqph.execute-api.eu-west-1.amazonaws.com/dev/restaurants"
    process.env.orders_api   = "https://n9oh0sxqph.execute-api.eu-west-1.amazonaws.com/dev/orders"
    process.env.restaurants_table = "restaurants-dev-mehis"
    process.env.AWS_REGION        = "eu-west-1"

    initialized = true
}

module.exports = {
    init
}