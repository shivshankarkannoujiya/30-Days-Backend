import mongoose, { Schema } from "mongoose";

const subscriptionSchema = new Schema({
    subscriber: {
        type: Schema.Types.ObjectId, // one who is SUBSCRIBING
        ref: "User"
    },

    channel: {
        type: Schema.Types.ObjectId,
        ref: "User" // one to whom `subscriber` is SUBSCRIBING
    }
}, { timestamps: true })

export const Subscription = mongoose.model("Subscription", subscriptionSchema)