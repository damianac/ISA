import Promise from 'bluebird';
import mongoose from 'mongoose';
import httpStatus from 'http-status';
import APIError from '../helpers/APIError';

/**
 * Auditorium Schema
 */
const AuditoriumSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: Number,
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
AuditoriumSchema.method({
});

/**
 * Statics
 */
AuditoriumSchema.statics = {
  /**
   * Get Auditorium
   * @param {ObjectId} id - The objectId of auditorium.
   * @returns {Promise<Auditorium, APIError>}
   */
  get(id) {
    return this.findById(id)
      .exec()
      .then((auditorium) => {
        if (auditorium) {
          return auditorium;
        }
        const err = new APIError('No such auditorium exists!', httpStatus.NOT_FOUND);
        return Promise.reject(err);
      });
  },

  /**
   * List auditoriums in descending order of 'createdAt' timestamp.
   * @param {number} skip - Number of auditoriums to be skipped.
   * @param {number} limit - Limit number of auditoriums to be returned.
   * @returns {Promise<Auditorium[]>}
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
 * @typedef Auditorium
 */
export default mongoose.model('Auditorium', AuditoriumSchema);
