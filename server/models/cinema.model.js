import Promise from 'bluebird';
import mongoose from 'mongoose';
import httpStatus from 'http-status';
import APIError from '../helpers/APIError';

/**
 * Cinema Schema
 */
const CinemaSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  speedTickets: [String],
  schedule: [{
      time: {
        type: String
      },
      name: {
        type: String
      }
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */

/**
 * Methods
 */
CinemaSchema.method({
});

/**
 * Statics
 */
CinemaSchema.statics = {
  /**
   * Get Cinema
   * @param {ObjectId} id - The objectId of cinema.
   * @returns {Promise<Cinema, APIError>}
   */
  get(id) {
    return this.findById(id)
      .exec()
      .then((cinema) => {
        if (cinema) {
          return cinema;
        }
        const err = new APIError('No such cinema exists!', httpStatus.NOT_FOUND);
        return Promise.reject(err);
      });
  },

  /**
   * List cinemas in descending order of 'createdAt' timestamp.
   * @param {number} skip - Number of cinemas to be skipped.
   * @param {number} limit - Limit number of cinemas to be returned.
   * @returns {Promise<Cinema[]>}
   */
  list({ skip = 0, limit = 50 } = {}) {
    return this.find()
      .sort({ createdAt: -1 })
      .skip(+skip)
      .limit(+limit)
      .exec();
  }
};

/**
 * @typedef Cinema
 */
export default mongoose.model('Cinema', CinemaSchema);
