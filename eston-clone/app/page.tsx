'use client';

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Remove preloader
    const preloader = document.querySelector('.preloader');
    if (preloader) {
      setTimeout(() => {
        preloader.classList.add('hidden');
      }, 1000);
    }
  }, []);

  return (
    <>
      {/* Preloader */}
      <div className="preloader fixed inset-0 bg-black z-[9999] flex items-center justify-center">
        <div className="preloader__image w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
      </div>

      {/* Sidebar Widget */}
      <div className="xs-sidebar-group info-group info-sidebar fixed right-[-400px] top-0 bottom-0 w-[400px] bg-[#111] z-[9999] overflow-y-auto transition-all duration-300">
        <div className="xs-overlay xs-bg-black fixed inset-0 bg-black/80 hidden"></div>
        <div className="xs-sidebar-widget p-8">
          <div className="sidebar-widget-container">
            <div className="widget-heading mb-8">
              <a href="#" className="close-side-widget text-white text-2xl">X</a>
            </div>
            <div className="sidebar-textwidget">
              <div className="sidebar-info-contents">
                <div className="content-inner">
                  <div className="logo mb-8">
                    <a href="/" className="text-3xl font-bold text-white">ESTON</a>
                  </div>
                  <div className="content-box mb-8">
                    <h4 className="text-white text-2xl mb-4">About Us</h4>
                    <p className="text-gray-300">Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et magna aliqua. Ut enim ad minim veniam laboris.</p>
                  </div>
                  <div className="form-inner mt-8">
                    <h4 className="text-white text-xl mb-4">Get a free quote</h4>
                    <form className="contact-form-validated">
                      <div className="form-group mb-4">
                        <input type="text" name="name" placeholder="Name" required className="w-full px-4 py-3 bg-gray-800 text-white border-0 rounded" />
                      </div>
                      <div className="form-group mb-4">
                        <input type="email" name="email" placeholder="Email" required className="w-full px-4 py-3 bg-gray-800 text-white border-0 rounded" />
                      </div>
                      <div className="form-group mb-4">
                        <textarea name="message" placeholder="Message..." className="w-full px-4 py-3 bg-gray-800 text-white border-0 rounded h-32"></textarea>
                      </div>
                      <div className="form-group message-btn">
                        <button type="submit" className="thm-btn bg-orange-500 text-white px-8 py-3 rounded hover:bg-orange-600 transition">Submit Now</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-wrapper">
        {/* Header */}
        <header className="main-header fixed w-full top-0 z-50 bg-black/90 backdrop-blur-sm">
          <nav className="main-menu">
            <div className="main-menu__wrapper">
              <div className="main-menu__wrapper-inner container mx-auto flex items-center justify-between py-4 px-6">
                <div className="main-menu__logo">
                  <a href="/" className="text-3xl font-bold text-white">ESTON</a>
                </div>
                <div className="main-menu__main-menu-box hidden lg:block">
                  <ul className="main-menu__list flex gap-8">
                    <li className="dropdown relative group">
                      <a href="/" className="text-white hover:text-orange-500 transition">Home</a>
                    </li>
                    <li>
                      <a href="#about" className="text-white hover:text-orange-500 transition">About</a>
                    </li>
                    <li>
                      <a href="#services" className="text-white hover:text-orange-500 transition">Services</a>
                    </li>
                    <li>
                      <a href="#projects" className="text-white hover:text-orange-500 transition">Projects</a>
                    </li>
                    <li>
                      <a href="#team" className="text-white hover:text-orange-500 transition">Team</a>
                    </li>
                    <li>
                      <a href="#blog" className="text-white hover:text-orange-500 transition">Blog</a>
                    </li>
                    <li>
                      <a href="#contact" className="text-white hover:text-orange-500 transition">Contact</a>
                    </li>
                  </ul>
                </div>
                <div className="main-menu__right flex items-center gap-4">
                  <div className="main-menu__nav-sidebar-icon">
                    <a className="navSidebar-button cursor-pointer text-white text-2xl">☰</a>
                  </div>
                  <div className="main-menu__btn-box">
                    <a href="#contact" className="main-menu__btn thm-btn bg-orange-500 text-white px-6 py-3 rounded hover:bg-orange-600 transition flex items-center gap-2">
                      <span className="fas fa-long-arrow-alt-right">→</span>
                      let&apos;s Talk
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>

        {/* Hero Slider */}
        <section className="main-slider relative mt-20">
          <div className="main-slider__slide-1 relative h-screen flex items-center">
            <div className="main-slider__bg absolute inset-0 bg-gradient-to-br from-purple-900 via-gray-900 to-black">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
            </div>
            <div className="main-slider__social-box absolute left-8 top-1/2 -translate-y-1/2 z-10">
              <h4 className="main-slider__social-title text-white mb-4 -rotate-90 origin-left transform translate-y-20">Follow Us</h4>
              <div className="main-slider__social flex flex-col gap-4">
                <a href="#" className="text-white hover:text-orange-500 transition text-xl">f</a>
                <a href="#" className="text-white hover:text-orange-500 transition text-xl">𝕏</a>
                <a href="#" className="text-white hover:text-orange-500 transition text-xl">B</a>
                <a href="#" className="text-white hover:text-orange-500 transition text-xl">▶</a>
              </div>
            </div>
            <div className="container mx-auto px-6 relative z-10">
              <div className="main-slider__content max-w-3xl">
                <p className="main-slider__sub-title text-orange-500 text-lg mb-4 animate-fade-in">Eston Video Production</p>
                <h2 className="main-slider__title text-white text-6xl md:text-7xl font-bold mb-8 leading-tight animate-slide-up">
                  Makes & Distribute <br /> Digital Content
                </h2>
                <div className="main-slider__btn-box animate-fade-in-delay">
                  <a href="#about" className="main-slider__btn thm-btn bg-orange-500 text-white px-8 py-4 rounded hover:bg-orange-600 transition inline-flex items-center gap-2">
                    <span className="fas fa-long-arrow-alt-right">→</span>
                    get started now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="about-one py-20 bg-gray-900 relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="about-one__left">
                <div className="about-one__img-box relative">
                  <div className="about-one__img bg-gray-800 rounded-lg overflow-hidden h-96">
                    <div className="w-full h-full bg-gradient-to-br from-orange-500 to-purple-600 flex items-center justify-center text-white text-4xl">
                      📹
                    </div>
                  </div>
                </div>
              </div>
              <div className="about-one__right">
                <div className="section-title text-left">
                  <p className="section-title__tagline text-orange-500 mb-2">Since From 2000</p>
                  <div className="section-title__title-box">
                    <h2 className="section-title__title text-white text-5xl font-bold mb-4">
                      Exciting directors<br />from 2000
                    </h2>
                    <p className="text-gray-400 text-lg mb-4">One of ten most</p>
                  </div>
                </div>
                <p className="about-one__text text-gray-300 mb-8">
                  Filmmaking is the process by which a motion picture is produced. Filmmaking involves a number of complex & discrete stages, starting with an initial story. Our business is one of the largest of its kind.
                </p>
                <div className="about-one__btn-box">
                  <a href="#" className="about-one__btn thm-btn bg-orange-500 text-white px-8 py-4 rounded hover:bg-orange-600 transition inline-flex items-center gap-2">
                    <span className="fas fa-long-arrow-alt-right">→</span>
                    learn more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Awards Section */}
        <section className="awards-one py-20 bg-black">
          <div className="container mx-auto px-6">
            <div className="section-title text-left mb-12">
              <p className="section-title__tagline text-orange-500 mb-2">Got Rewards</p>
              <div className="section-title__title-box">
                <h2 className="section-title__title text-white text-4xl md:text-5xl font-bold">
                  We won 80+ design awards in 2023 stand<br />alone, some of which had us share the stage<br />with <span className="text-orange-500">Google, Netflix, & Spotify</span>
                </h2>
                <p className="text-gray-400 mt-4">Our Awards</p>
              </div>
            </div>
            <div className="awards-one__bottom">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                {['Business Insider', 'Indor Designs', 'Netflix', 'Sony', 'Youtube', 'Lego'].map((brand, index) => (
                  <div key={index} className="awards-one__single text-center">
                    <div className="awards-one__img bg-gray-900 rounded-lg p-8 mb-4 h-32 flex items-center justify-center">
                      <span className="text-4xl">🏆</span>
                    </div>
                    <div className="awards-one__content">
                      <h3 className="text-white text-sm">{brand.toLowerCase()}<br />award <span className="text-orange-500">2000</span></h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Feature Text */}
        <section className="feature-one bg-gradient-to-r from-orange-500 to-purple-600 py-8 overflow-hidden">
          <div className="feature-one__wrap flex whitespace-nowrap animate-marquee">
            <h2 className="feature-one__title text-white text-4xl font-bold px-8">
              We love to create high quality cinematography. • We love to create high quality cinematography. • We love to create high quality cinematography. •
            </h2>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="services-one py-20 bg-gray-900">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: '🎬', title: 'Content Production', text: 'Filmmaking involves a numbers of complex discrete' },
                { icon: '🎥', title: 'Film Production', text: 'Filmmaking involves a numbers of complex discrete' },
                { icon: '🎤', title: 'Voice Production', text: 'Filmmaking involves a numbers of complex discrete' },
                { icon: '🎨', title: 'Creative Direction', text: 'Filmmaking involves a numbers of complex discrete' }
              ].map((service, index) => (
                <div key={index} className="services-one__single bg-black p-8 rounded-lg hover:bg-gray-800 transition group">
                  <div className="services-one__icon text-6xl mb-6 group-hover:scale-110 transition">
                    {service.icon}
                  </div>
                  <h3 className="services-one__title text-white text-2xl font-bold mb-4">
                    <a href="#">{service.title}</a>
                  </h3>
                  <p className="services-one__text text-gray-400 mb-4">{service.text}</p>
                  <a href="#" className="services-one__read-more text-orange-500 hover:text-orange-400 transition">Read More →</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="project-one py-20 bg-black">
          <div className="container mx-auto px-6">
            <div className="project-one__top flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
              <div className="project-one__left">
                <div className="section-title text-left">
                  <p className="section-title__tagline text-orange-500 mb-2">Our Projects</p>
                  <div className="section-title__title-box">
                    <h2 className="section-title__title text-white text-5xl font-bold">5000+ projects already done</h2>
                    <p className="text-gray-400 mt-2">Case study</p>
                  </div>
                </div>
              </div>
              <div className="project-one__right">
                <a href="#" className="project-one__btn thm-btn bg-orange-500 text-white px-8 py-4 rounded hover:bg-orange-600 transition inline-flex items-center gap-2">
                  <span className="fas fa-long-arrow-alt-right">→</span>
                  More Works
                </a>
              </div>
            </div>
            <div className="project-one__bottom">
              <ul className="project-one__list space-y-6">
                {[
                  { year: '2015', title: 'Avengers: Age Of Ultron', director: 'Alvon D. Hebdo', budget: '$100 Million' },
                  { year: '2018', title: 'The Banshees of Inisherin', director: 'Alvon D. Hebdo', budget: '$100 Million' },
                  { year: '2022', title: 'Puss in Boots: The Last Wish', director: 'Alvon D. Hebdo', budget: '$100 Million' },
                  { year: '2023', title: 'Shotgun Wedding', director: 'Alvon D. Hebdo', budget: '$100 Million' }
                ].map((project, index) => (
                  <li key={index} className="bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-800 transition">
                    <div className="flex flex-col md:flex-row items-center gap-6 p-6">
                      <div className="project-one__img flex-shrink-0 w-full md:w-48 h-32 bg-gradient-to-br from-purple-600 to-orange-500 rounded"></div>
                      <div className="project-one__list-left flex-shrink-0">
                        <div className="project-one__list-year text-orange-500 text-2xl font-bold mb-2">{project.year}</div>
                        <div className="project-one__list-title">
                          <h5 className="text-white text-xl font-bold">{project.title}</h5>
                        </div>
                      </div>
                      <div className="project-one__list-right ml-auto flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
                        <div className="project-one__director-and-budget">
                          <div className="project-one__director text-gray-400 mb-2">
                            <p><span className="text-white">Director:</span> {project.director}</p>
                          </div>
                          <div className="project-one__budget text-gray-400">
                            <p><span className="text-white">Budget:</span> {project.budget}</p>
                          </div>
                        </div>
                        <div className="project-one__read-more">
                          <a href="#" className="text-orange-500 hover:text-orange-400 transition whitespace-nowrap">Read More →</a>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="testimonial-one py-20 bg-gray-900">
          <div className="container mx-auto px-6">
            <div className="testimonial-one__slider max-w-4xl mx-auto">
              <div className="testimonial-one__main-content text-center mb-12">
                <div className="testimonial-one__quote text-orange-500 text-6xl mb-6">&ldquo;</div>
                <p className="testimonial-one__text text-white text-2xl leading-relaxed">
                  &ldquo; Really glad to be working with Eston. They&apos;ve <br />
                  been anything less than supportive of me or my endeavors <br />
                  as I branch out into acting and auditioning! &rdquo;
                </p>
              </div>
              <div className="testimonial-one__thumb-outer-box flex flex-wrap justify-center items-center gap-8">
                {['Mark H. Allen', 'Maklon H. Hilix', 'James H. Hilix'].map((name, index) => (
                  <div key={index} className="testimonial-one__thumb-item text-center">
                    <div className="testimonial-one__img-holder-box">
                      <div className="testimonial-one__img-holder w-20 h-20 bg-gradient-to-br from-orange-500 to-purple-600 rounded-full mb-3 mx-auto"></div>
                      <div className="testimonial-one__client-info">
                        <h4 className="testimonial-one__client-name text-white font-bold">{name}</h4>
                        <p className="testimonial-one__client-sub-title text-gray-400 text-sm">Head Of Idea</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="team-one py-20 bg-black">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-12 gap-12">
              <div className="md:col-span-4">
                <div className="team-one__left">
                  <div className="section-title text-left mb-8">
                    <p className="section-title__tagline text-orange-500 mb-2">Our Team</p>
                    <div className="section-title__title-box">
                      <h2 className="section-title__title text-white text-5xl font-bold mb-4">
                        Is ready to save<br />your project
                      </h2>
                      <p className="text-gray-400">Our avengers</p>
                    </div>
                  </div>
                  <div className="team-one__btn-box">
                    <a href="#" className="team-one__btn thm-btn bg-orange-500 text-white px-8 py-4 rounded hover:bg-orange-600 transition inline-flex items-center gap-2">
                      <span className="fas fa-long-arrow-alt-right">→</span>
                      join us today
                    </a>
                  </div>
                </div>
              </div>
              <div className="md:col-span-8">
                <div className="team-one__right">
                  <div className="grid md:grid-cols-2 gap-8">
                    {[
                      { name: 'Alexis D. Dowson', role: 'Founder' },
                      { name: 'Hilixer H. Yellow', role: 'Head Of Idea' },
                      { name: 'Gumble E. Elson', role: 'Designer' },
                      { name: 'Jakson N. Nelson', role: 'Developer' }
                    ].map((member, index) => (
                      <div key={index} className="team-one__single group">
                        <div className="team-one__img-box mb-6">
                          <div className="team-one__img bg-gradient-to-br from-purple-600 to-orange-500 rounded-lg h-80 group-hover:scale-105 transition"></div>
                        </div>
                        <div className="team-one__content">
                          <p className="text-orange-500 mb-2">{member.role}</p>
                          <h3 className="text-white text-2xl font-bold">
                            <a href="#">{member.name}</a>
                          </h3>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sliding Text */}
        <section className="sliding-text bg-orange-500 py-4 overflow-hidden">
          <div className="sliding-text__wrap flex animate-scroll">
            <div className="flex gap-12 whitespace-nowrap">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex gap-12">
                  <span className="text-white text-2xl font-bold">Award Winner Agency</span>
                  <span className="text-white text-2xl font-bold">•</span>
                  <span className="text-white text-2xl font-bold">Creative Production House</span>
                  <span className="text-white text-2xl font-bold">•</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="video-one py-20 bg-gray-900">
          <div className="container mx-auto px-6">
            <div className="video-one__inner relative rounded-lg overflow-hidden">
              <div className="video-one__img bg-gradient-to-br from-purple-900 to-black h-96 flex items-center justify-center relative">
                <div className="video-one__video-link">
                  <a href="https://www.youtube.com/watch?v=Get7rqXYrbQ" className="video-popup">
                    <div className="video-one__text bg-orange-500 w-20 h-20 rounded-full flex items-center justify-center text-white text-2xl hover:bg-orange-600 transition cursor-pointer">
                      ▶
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sliding Text 2 */}
        <section className="sliding-text bg-purple-600 py-4 overflow-hidden">
          <div className="sliding-text__wrap flex animate-scroll-reverse">
            <div className="flex gap-12 whitespace-nowrap">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex gap-12">
                  <span className="text-white text-2xl font-bold">Award Winner Agency</span>
                  <span className="text-white text-2xl font-bold">•</span>
                  <span className="text-white text-2xl font-bold">Creative Production House</span>
                  <span className="text-white text-2xl font-bold">•</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="news-one py-20 bg-black">
          <div className="container mx-auto px-6">
            <div className="news-one__top flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
              <div className="news-one__left">
                <div className="section-title text-left">
                  <p className="section-title__tagline text-orange-500 mb-2">Company Insights</p>
                  <div className="section-title__title-box">
                    <h2 className="section-title__title text-white text-5xl font-bold">& Recent insights</h2>
                    <p className="text-gray-400 mt-2">News feed</p>
                  </div>
                </div>
              </div>
              <div className="news-one__right">
                <a href="#" className="news-one__btn thm-btn bg-orange-500 text-white px-8 py-4 rounded hover:bg-orange-600 transition inline-flex items-center gap-2">
                  <span className="fas fa-long-arrow-alt-right">→</span>
                  more news
                </a>
              </div>
            </div>
            <div className="news-one__bottom">
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { title: 'The company\'s goal is to eliminate the need for technical...', date: 'june 21, 2023' },
                  { title: 'Skills, such working with command lines to run a node...', date: 'june 21, 2023' },
                  { title: 'Instead, users could have a fully synced, dedicated...', date: 'june 21, 2023' }
                ].map((news, index) => (
                  <div key={index} className="news-one__single bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-800 transition group">
                    <div className="news-one__img-box">
                      <div className="news-one__img bg-gradient-to-br from-orange-500 to-purple-600 h-64 relative">
                        <div className="overlay-icon absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                          <a href="#" className="text-white text-4xl">+</a>
                        </div>
                      </div>
                    </div>
                    <div className="news-one__content p-6">
                      <div className="news-one__sub-titlt-and-date flex justify-between mb-4 flex-wrap gap-2">
                        <div className="news-one__sub-title text-orange-500">Video Production</div>
                        <div className="news-one__date text-gray-500 text-sm">{news.date}</div>
                      </div>
                      <h3 className="news-one__title text-white text-xl font-bold mb-4">
                        <a href="#">{news.title}</a>
                      </h3>
                      <div className="news-one__read-more">
                        <a href="#" className="text-orange-500 hover:text-orange-400 transition">Read more →</a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Brands Section */}
        <section className="brand-one py-12 bg-gray-900">
          <div className="container mx-auto px-6">
            <div className="brand-one__inner">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="brand-one__img bg-black rounded-lg p-6 flex items-center justify-center h-24">
                    <span className="text-4xl">🏢</span>
                  </div>
                ))}
                <div className="brand-one__btn flex items-center justify-center">
                  <h5><a href="#" className="text-white text-xl font-bold hover:text-orange-500 transition">Our Sponsors</a></h5>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                <div className="brand-one__btn flex items-center justify-center">
                  <h5><a href="#" className="text-white text-xl font-bold hover:text-orange-500 transition">Next will be you...</a></h5>
                </div>
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="brand-one__img bg-black rounded-lg p-6 flex items-center justify-center h-24">
                    <span className="text-4xl">🏢</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="site-footer bg-black pt-20 pb-8">
          <div className="container mx-auto px-6">
            <div className="site-footer__top">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                <div className="footer-widget__column footer-widget__about">
                  <div className="footer-widget__logo mb-6">
                    <a href="/" className="text-3xl font-bold text-white">ESTON</a>
                  </div>
                  <p className="footer-widget__about-text text-gray-400 mb-4">21/A, Booston Apt. 692<br />Los Vhikari, US</p>
                  <div className="footer-widget__contact mb-6">
                    <p className="mb-2"><a href="mailto:info@eston-work.com" className="text-gray-400 hover:text-orange-500 transition">info@eston-work.com</a></p>
                    <p><a href="tel:7774500066" className="text-gray-400 hover:text-orange-500 transition">+777 (45) 000 66</a></p>
                  </div>
                  <div className="site-footer__social flex gap-4">
                    <a href="#" className="text-gray-400 hover:text-orange-500 transition text-xl">f</a>
                    <a href="#" className="text-gray-400 hover:text-orange-500 transition text-xl">𝕏</a>
                    <a href="#" className="text-gray-400 hover:text-orange-500 transition text-xl">B</a>
                    <a href="#" className="text-gray-400 hover:text-orange-500 transition text-xl">▶</a>
                    <a href="#" className="text-gray-400 hover:text-orange-500 transition text-xl">in</a>
                  </div>
                </div>
                <div className="footer-widget__column footer-widget__services">
                  <div className="footer-widget__title-box mb-6">
                    <h3 className="footer-widget__title text-white text-xl font-bold">Services</h3>
                  </div>
                  <ul className="footer-widget__services-list space-y-3">
                    <li><a href="#" className="text-gray-400 hover:text-orange-500 transition">Film Production</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-orange-500 transition">Creative Direction</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-orange-500 transition">Digital Content</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-orange-500 transition">Digital support</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-orange-500 transition">Visual Effects</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-orange-500 transition">VFX Making</a></li>
                  </ul>
                </div>
                <div className="footer-widget__column footer-widget__pages">
                  <div className="footer-widget__title-box mb-6">
                    <h3 className="footer-widget__title text-white text-xl font-bold">Our Pages</h3>
                  </div>
                  <ul className="footer-widget__pages-list space-y-3">
                    <li><a href="#" className="text-gray-400 hover:text-orange-500 transition">Our Team</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-orange-500 transition">Price & Plans</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-orange-500 transition">Contact Us</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-orange-500 transition">Refund Policy</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-orange-500 transition">Terms & Condition</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-orange-500 transition">Careers</a></li>
                  </ul>
                </div>
                <div className="footer-widget__column footer-widget__gallery">
                  <div className="footer-widget__title-box mb-6">
                    <h3 className="footer-widget__title text-white text-xl font-bold">Instagram <span className="text-orange-500">@eston-video</span></h3>
                  </div>
                  <ul className="footer-widget__gallery-list grid grid-cols-3 gap-3">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <li key={i}>
                        <div className="footer-widget__gallery-img bg-gradient-to-br from-purple-600 to-orange-500 rounded h-20 relative group">
                          <a href="#" className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition">
                            <span className="text-white text-2xl">📷</span>
                          </a>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="site-footer__bottom border-t border-gray-800 pt-8">
              <div className="site-footer__bottom-inner text-center">
                <p className="site-footer__bottom-text text-gray-400">
                  Copyright & Design By <a href="#" className="text-orange-500 hover:text-orange-400 transition">@ThemeDox</a> - 2023
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* Scroll to Top */}
      <a href="#" className="scroll-to-top fixed bottom-8 right-8 bg-orange-500 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-orange-600 transition z-50">
        ↑
      </a>
    </>
  );
}
