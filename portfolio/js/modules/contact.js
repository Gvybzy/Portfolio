export function renderContact(profile) {
  const email = profile.contact.email;
  const linkedin = profile.contact.linkedin;
  return `
    <section id="contact" class="section-alt">
      <div class="container">
        <div class="contact-panel">
          <div>
            <div class="eyebrow">Contact</div>
            <h2>Let's connect</h2>
            <p>Reach out through GitHub, or add your email and LinkedIn later from <span class="mono">data/profile.js</span>.</p>
          </div>
          <div class="contact-list">
            ${email ? `<div class="contact-row"><span class="k">email</span><a class="v linked" href="mailto:${email}">${email}</a></div>` : `<div class="contact-row"><span class="k">email</span><span class="v">[Add email]</span></div>`}
            ${linkedin ? `<div class="contact-row"><span class="k">linkedin</span><a class="v linked" href="${linkedin}" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a></div>` : `<div class="contact-row"><span class="k">linkedin</span><span class="v">[Add LinkedIn]</span></div>`}
            <div class="contact-row"><span class="k">github</span><a class="v linked" href="${profile.github}" target="_blank" rel="noopener noreferrer">github.com/${profile.githubUsername} ↗</a></div>
          </div>
        </div>
      </div>
    </section>`;
}
