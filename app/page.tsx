"use client";

import { useState } from "react";

const branches = [
  {
    name: "Rajapolah",
    address:
      "Jl. Bebedahan, Rajapolah, Kec. Rajapolah, Kabupaten Tasikmalaya, Jawa Barat 46155",
    phone: "0823-1000-2599",
    whatsapp: "6282310002599",
  },
  {
    name: "Tasikmalaya",
    address:
      "Jl. Dr. Sukarjo No.27, Tawangsari, Kec. Tawang, Kab. Tasikmalaya, Jawa Barat 22848",
    phone: "0838-6383-9101",
    whatsapp: "6283863839101",
  },
];

const theory = [
  ["Pengenalan Kendaraan", "Pengecekan komponen mesin, fungsi indikator dashboard, dan kelayakan kendaraan."],
  ["Regulasi Lalu Lintas", "Pemahaman rambu-rambu, marka jalan, serta etika berkendara aman."],
  ["Keselamatan Kerja", "Prosedur darurat di jalan raya dan penggunaan sabuk pengaman."],
];

const practice = [
  ["Pengoperasian Dasar", "Teknik menyalakan mesin, pengaturan posisi duduk, penggunaan kopling/transmisi, dan teknik pengereman halus."],
  ["Manajemen Ruang & Kendali", "Latihan maju-mundur, slalom, parkir paralel, serong, dan garage, serta maju di tanjakan atau turunan."],
  ["Berkendara di Jalan Raya", "Praktik langsung menghadapi lalu lintas padat, jalan sempit, serta teknik defensive driving."],
];

function WhatsAppIcon() {
  return <span aria-hidden="true">◉</span>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [branchOpen, setBranchOpen] = useState(false);

  const openBranch = () => {
    setMenuOpen(false);
    setBranchOpen(true);
  };

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#beranda" aria-label="LKP Arjuna Jaya, kembali ke beranda">
          <img src="/logo-arjuna-jaya.png" alt="Logo LKP Arjuna Jaya" />
          <span><b>LKP ARJUNA JAYA</b><small>Rajapolah</small></span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="site-menu">
          <span></span><span></span><span></span><i>Menu</i>
        </button>
        <nav id="site-menu" className={menuOpen ? "open" : ""} aria-label="Navigasi utama">
          <a href="#tentang" onClick={() => setMenuOpen(false)}>Tentang</a>
          <a href="#layanan" onClick={() => setMenuOpen(false)}>Layanan</a>
          <a href="#materi" onClick={() => setMenuOpen(false)}>Materi</a>
          <a href="#cabang" onClick={() => setMenuOpen(false)}>Cabang</a>
          <button className="nav-cta" onClick={openBranch}>Hubungi Kami</button>
        </nav>
      </header>

      <section className="hero" id="beranda">
        <div className="hero-copy">
          <p className="eyebrow">LEMBAGA KURSUS & PELATIHAN</p>
          <h1>Lebih siap di jalan,<br /><em>lebih percaya diri.</em></h1>
          <p className="hero-lead">Belajar mengemudi dari dasar bersama instruktur yang sabar dan berpengalaman.</p>
          <div className="hero-actions">
            <button className="button button-primary" onClick={openBranch}><WhatsAppIcon /> Pilih Cabang</button>
            <a className="button button-ghost" href="#materi">Lihat Materi <span>↓</span></a>
          </div>
          <div className="hero-points"><span>✓ Instruktur berpengalaman</span><span>✓ Jadwal fleksibel</span></div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="sun"></div><div className="road"><i></i><i></i><i></i></div>
          <div className="car"><div className="car-body"><b></b><b></b></div><div className="wheel left"></div><div className="wheel right"></div></div>
          <p>Sejak<br /><b>2013</b></p>
        </div>
      </section>

      <section className="intro section" id="tentang">
        <p className="eyebrow">TENTANG KAMI</p>
        <div className="intro-grid">
          <h2>Belajar mengemudi bukan hanya soal memegang setir.</h2>
          <div><p>Lembaga Kursus dan Pelatihan Arjuna Jaya adalah lembaga pendidikan nonformal bagi masyarakat yang memerlukan bekal pengetahuan, keterampilan, kecakapan, dan mental dalam berkendara, khususnya kendaraan roda empat.</p><p>Didirikan pada tahun 2013 dan berada di bawah naungan CV. Arjuna Jaya Corp, kami tumbuh menjadi lembaga kursus mengemudi yang terpercaya dan bisa diandalkan.</p></div>
        </div>
        <div className="stats"><div><b>13+</b><span>Tahun mendampingi<br />calon pengemudi</span></div><div><b>2</b><span>Cabang untuk melayani<br />Anda lebih dekat</span></div><div><b>08.00–17.00</b><span>Jam pelayanan<br />Senin–Sabtu</span></div></div>
      </section>

      <section className="services section" id="layanan">
        <div className="section-heading"><div><p className="eyebrow">LAYANAN KAMI</p><h2>Yang dapat kami bantu.</h2></div><p>Pelayanan yang praktis untuk menemani perjalanan Anda menjadi pengemudi yang lebih siap.</p></div>
        <div className="service-grid">
          <article className="service-card"><span className="service-number">01</span><div className="service-icon">▱</div><h3>Kursus Mengemudi</h3><p>Pelatihan bertahap dari pengenalan kendaraan hingga praktik berkendara di jalan raya.</p><a href="#materi">Pelajari materi <span>→</span></a></article>
          <article className="service-card accent"><span className="service-number">02</span><div className="service-icon">▤</div><h3>Layanan Pembuatan SIM</h3><p>Bantuan informasi dan layanan pembuatan SIM untuk melengkapi kebutuhan berkendara Anda.</p><button onClick={openBranch}>Tanyakan layanan <span>→</span></button></article>
        </div>
      </section>

      <section className="curriculum section" id="materi">
        <div className="section-heading"><div><p className="eyebrow">PROGRAM PEMBELAJARAN</p><h2>Yang Anda dapatkan<br />dari pembelajaran.</h2></div><p>Materi dirancang agar Anda memahami dasar kendaraan, terampil mengendalikan mobil, dan lebih siap di jalan.</p></div>
        <div className="curriculum-grid">
          <article className="curriculum-card"><div className="card-label"><span>01</span><p>FONDASI BERKENDARA</p></div><h3>Materi Teori</h3><ul>{theory.map(([title, text]) => <li key={title}><span>✓</span><p><b>{title}</b>{text}</p></li>)}</ul></article>
          <article className="curriculum-card dark"><div className="card-label"><span>02</span><p>PRAKTIK BERTAHAP</p></div><h3>Materi Praktik</h3><ul>{practice.map(([title, text]) => <li key={title}><span>✓</span><p><b>{title}</b>{text}</p></li>)}</ul></article>
        </div>
      </section>

      <section className="branches section" id="cabang">
        <div className="section-heading"><div><p className="eyebrow">DUA CABANG UNTUK ANDA</p><h2>Pilih lokasi<br />yang paling dekat.</h2></div><p>Hubungi cabang pilihan Anda untuk informasi jadwal, program, dan layanan.</p></div>
        <div className="branch-grid">{branches.map((branch, index) => <article className="branch-card" key={branch.name}><span className="branch-index">0{index + 1}</span><h3>Cabang {branch.name}</h3><p className="address">{branch.address}</p><a href={`tel:${branch.phone.replace(/-/g, "")}`} className="phone">{branch.phone}</a><p className="hours">Senin–Sabtu · 08.00–17.00 WIB</p><div className="branch-actions"><a className="mini-button map" target="_blank" rel="noreferrer" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(branch.address)}`}>Lokasi <span>↗</span></a><a className="mini-button wa" target="_blank" rel="noreferrer" href={`https://wa.me/${branch.whatsapp}?text=${encodeURIComponent(`Halo, saya ingin bertanya tentang kursus mengemudi di cabang ${branch.name}.`)}`}><WhatsAppIcon /> WhatsApp</a></div></article>)}</div>
      </section>

      <section className="reviews section" id="ulasan">
        <div className="review-feature"><p className="eyebrow">KOMITMEN KAMI</p><h2>Mendampingi langkah awal Anda dengan sabar.</h2><p>Kami percaya kepercayaan diri tumbuh dari proses belajar yang nyaman, terarah, dan bertahap.</p><button className="button button-primary" onClick={openBranch}>Tanya Jadwal Kursus</button></div>
        <div className="review-note"><span>★</span><h3>Ulasan peserta segera hadir</h3><p>Bagian ini disiapkan untuk menampilkan pengalaman belajar dari para peserta LKP Arjuna Jaya.</p></div>
      </section>

      <footer><div className="footer-brand"><img src="/logo-arjuna-jaya.png" alt="Logo LKP Arjuna Jaya" /><div><b>LKP ARJUNA JAYA</b><p>Kursus Mengemudi Rajapolah</p></div></div><p>© {new Date().getFullYear()} LKP Arjuna Jaya. Semua hak dilindungi.</p><a href="#beranda">Kembali ke atas ↑</a></footer>

      <button className="floating-contact" onClick={openBranch} aria-label="Hubungi LKP Arjuna Jaya melalui WhatsApp"><WhatsAppIcon /><span>Hubungi Kami</span></button>

      {branchOpen && <div className="modal-backdrop" role="presentation" onMouseDown={() => setBranchOpen(false)}><div className="branch-modal" role="dialog" aria-modal="true" aria-labelledby="branch-title" onMouseDown={(event) => event.stopPropagation()}><button className="modal-close" onClick={() => setBranchOpen(false)} aria-label="Tutup pilihan cabang">×</button><p className="eyebrow">HUBUNGI KAMI</p><h2 id="branch-title">Pilih cabang Anda</h2><p>Tim kami siap membantu menjawab pertanyaan Anda.</p><div className="modal-options">{branches.map((branch) => <a key={branch.name} target="_blank" rel="noreferrer" href={`https://wa.me/${branch.whatsapp}?text=${encodeURIComponent(`Halo, saya ingin bertanya tentang kursus mengemudi di cabang ${branch.name}.`)}`}><span><b>Cabang {branch.name}</b><small>{branch.phone}</small></span><i>→</i></a>)}</div></div></div>}
    </main>
  );
}
