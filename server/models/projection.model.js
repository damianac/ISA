import Promise from 'bluebird';
import mongoose from 'mongoose';
import httpStatus from 'http-status';
import APIError from '../helpers/APIError';

/**
 * Projection Schema
 */
const ProjectionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  actors: [String],
  genre: String,
  director: String,
  duration: String,
  image: String,
  rating: Number,
  description: String,
  auditorium: [String],
  schedule: [String],
  price: Number,
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
ProjectionSchema.method({
});

/**
 * Statics
 */
ProjectionSchema.statics = {
  /**
   * Get projection
   * @param {ObjectId} id - The objectId of projection.
   * @returns {Promise<Projection, APIError>}
   */
  get(id) {
    return this.findById(id)
      .exec()
      .then((projection) => {
        if (projection) {
          return projection;
        }
        const err = new APIError('No such projection exists!', httpStatus.NOT_FOUND);
        return Promise.reject(err);
      });
  },

  /**
   * List projections in descending order of 'createdAt' timestamp.
   * @param {number} skip - Number of projections to be skipped.
   * @param {number} limit - Limit number of projections to be returned.
   * @returns {Promise<Projection[]>}
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
 * @typedef Projection
 */
export default mongoose.model('Projection', ProjectionSchema);
