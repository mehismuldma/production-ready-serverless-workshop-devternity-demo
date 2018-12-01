let initialized = false


const init = async () => {
    if (initialized) {
        return
    }
    process.env.STAGE ='dev'
    process.env.order_events_stream = 'orders-dev-mehis'
    process.env.restaurant_notification_topic = 'restaurants-dev-mehis'
    process.env.restaurants_api   = "https://n9oh0sxqph.execute-api.us-east-2.amazonaws.com/dev/restaurants"
    process.env.orders_api   = "https://n9oh0sxqph.execute-api.us-east-2.amazonaws.com/dev/orders"
    process.env.restaurants_table = "restaurants-dev-mehis"
    process.env.AWS_REGION        = "us-east-2"

    initialized = true
}

module.exports = {
    init
}