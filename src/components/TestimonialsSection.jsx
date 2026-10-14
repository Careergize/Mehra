import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';
import { testimonialsData } from '../data/testimonialsData';

export default function TestimonialsSection() {
  const [start, setStart] = useState(0);
  const reviews = Array.from({ length: Math.min(3, testimonialsData.length) }, (_, offset) => testimonialsData[(start + offset) % testimonialsData.length]);
  const move = (direction) => setStart(current => (current + direction + testimonialsData.length) % testimonialsData.length);

  return <section className="reviews-section" id="reviews" aria-labelledby="reviews-heading">
    <div className="reviews-heading"><p>What our clients say</p><h2 id="reviews-heading"><span>CLIENT</span> <span className="review-heading-pink">REVIEWS</span></h2><span aria-hidden="true">✦</span></div>
    <div className="reviews-carousel">
      <button className="review-arrow" onClick={() => move(-1)} aria-label="Previous testimonials"><ArrowLeft size={18}/></button>
      <div className="reviews-grid" aria-live="polite" aria-atomic="true">{reviews.map(review => <article className="review-card" key={review.id}>
        <div className="review-avatar" aria-hidden="true">{review.name.split(' ').map(part => part[0]).slice(0, 2).join('')}</div>
        <div className="review-content"><div className="review-stars" aria-label={`${review.rating} out of 5 stars`}>{Array.from({ length: review.rating }, (_, i) => <Star key={i} size={13} fill="currentColor" aria-hidden="true"/>)}</div><blockquote>{review.comment}</blockquote><p className="review-author">— {review.name}</p><p className="review-location">{review.location}</p></div>
      </article>)}</div>
      <button className="review-arrow" onClick={() => move(1)} aria-label="Next testimonials"><ArrowRight size={18}/></button>
    </div>
    <div className="review-dots" role="group" aria-label="Choose testimonials">{testimonialsData.map((review, index) => <button key={review.id} className={start === index ? 'active' : ''} onClick={() => setStart(index)} aria-label={`Show testimonials starting with ${review.name}`} aria-pressed={start === index}/>)}</div>
  </section>;
}

