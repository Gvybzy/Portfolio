export function renderEducation(profile) {
  return `
    <section id="education" class="section-alt">
      <div class="container">
        <div class="section-head">
          <div class="eyebrow">Education / Certification</div>
          <h2 class="section-title">Building the foundation</h2>
          <p class="section-sub">My education and credentials, kept intentionally honest and easy to update.</p>
        </div>
        <div class="education-grid">
          <article class="info-card">
            <span class="card-label">Education</span>
            <h3>${profile.education}</h3>
            <p>Currently building a broad technical foundation through information technology, programming, databases, web development, and software projects.</p>
            <span class="status-pill">Current</span>
          </article>
          <article class="info-card">
            <span class="card-label">Certifications</span>
            <h3>No certifications added yet.</h3>
            <p>This section is ready for future certifications once they are actually earned.</p>
            <span class="status-pill muted">To be updated</span>
          </article>
        </div>
      </div>
    </section>`;
}
