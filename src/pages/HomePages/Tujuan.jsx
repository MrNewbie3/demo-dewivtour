import TextComp from "../../components/ui/TextComp";

function Tujuan() {
  return (
    <div className="mt-14 px-16 h-auto">
      <div className="title text-center">
        <p className="text-xl md:text-2xl font-medium tracking-widest mb-6">Tujuan Kami</p>
        <p className="font-bold text-3xl md:text-5xl mb-20">Pengembangan Desa di Era Digital</p>
      </div>
      <div className="content flex flex-col lg:flex-row gap-x-32">
        <div className="description relative flex flex-col gap-y-4 max-w-2xl">
          <TextComp
            number={"1"}
            color={"bg-blueButton"}
            title={"Lihat lokasi wisata dengan virtual tour"}
            info={
              "mengunjungi sebuah lokasi wisata seperti desa wisata, rumah makan, situs bersejarah dan tempat-tempat yang ramai dikunjungi masyarakat secara virtual melalui media digital. Kunjungan secara virtual bisa memiliki banyak fitur, seperti tampilan lokasi dengan panorama 360 derajat, video interaktif, informasi lokasi yang bahkan bisa diakses dengan teknologi virtual reality (VR) Dalam konteks lokasi wisata, VRagio dapat memberikan pengalaman yang sangat menarik bagi para wisatawan yang ingin mengunjungi lokasi wisata tersebut sebelum datang ke lokasi secara  langsung. Misalnya, seorang wisatawan dapat melakukan virtual tour ke lokasi wisata yang ingin dikunjungi melalui vragio.com, sehingga wisatawan dapat melihat dan merasakan suasana lokasi tersebut secara langsung, meskipun sebenarnya masih berada di rumah. Selain itu, vragio.com dilengkapi dengan informasi-informasi tambahan seperti sejarah lokasi wisata, keunikan, dan fasilitas yang tersedia di sana. Dengan adanya teknologi virtual tour, para wisatawan dapat merencanakan kunjungan mereka dengan lebih baik, karena mereka sudah bisa mempelajari lebih detail mengenai lokasi wisata yang akan mereka kunjungi. Selain itu, VRagio juga dapat membantu mengurangi biaya yang diperlukan untuk kunjungan ke lokasi wisata, karena wisatawan sudah bisa melihat lokasi tersebut tanpa perlu datang langsung."
            }
          />
          <TextComp
            number={"2"}
            color={"bg-semiOrange"}
            title={"Pemesanan travel dan guide ke lokasi wisata "}
            info={
              "Anda ingin menjelajahi keindahan alam dan keunikan budaya di sebuah lokasi wisata, namun tidak tahu bagaimana cara menuju ke sana? Jangan khawatir,  vragio.com siap membantu Anda. VRagio.com adalah agen perjalanan yang menyediakan paket wisata ke berbagai lokasi wisata di Indonesia. Kami memahami bahwa perjalanan bisa menjadi melelahkan jika tidak dipersiapkan dengan baik, oleh karena itu kami menawarkan layanan transportasi dan pemandu wisata yang akan membantu Anda selama berada di lokasi wisata. Dengan memilih paket wisata kami, Anda akan mendapatkan transportasi yang nyaman, akomodasi yang sesuai dengan kebutuhan Anda, dan pemandu wisata yang profesional dan berpengalaman. Pemandu wisata kami akan membawa Anda menjelajahi setiap sudut lokasi wisata yang Anda kunjungi dan memberikan informasi sejarah dan keunikan dari setiap tempat yang dikunjungi. Anda tidak perlu khawatir tentang keamanan selama berada di lokasi wisata, karena pemandu wisata kami telah terlatih untuk memastikan keamanan dan kenyamanan selama perjalanan. Anda juga dapat memilih paket wisata yang sesuai dengan kebutuhan Anda, mulai dari paket wisata keluarga, paket wisata romantis, hingga paket wisata petualangan (dalam proses pengembangan). Jangan ragu untuk memesan paket wisata dari kami, karena kami bekerja sama dengan Lembaga yang memiliki reputasi yang terpercaya dan telah melayani ribuan pelanggan. Nikmati liburan yang menyenangkan dan berkesan dengan menggunakan layanan VRagio tour. Segera hubungi kami untuk mendapatkan informasi lebih lanjut dan memesan paket wisata yang sesuai dengan kebutuhan Anda. Jangan lewatkan kesempatan untuk menjelajahi keindahan alam dan keunikan budaya di berbagai lokasi wisata di seluruh Indonesia bersama vragio.com."
            }
          />
          <TextComp
            number={"3"}
            color={"bg-cream"}
            title={"Informasi kegiatan dan perubahan tata letak di lokasi wisata "}
            info={
              "Kami ingin memberikan informasi terbaru mengenai kegiatan dan perubahan tata letak di lokasi wisata yang Anda kunjungi. Kami memahami bahwa Anda ingin memiliki pengalaman liburan yang menyenangkan dan tanpa hambatan, oleh karena itu kami berusaha untuk memberikan informasi terkini mengenai kegiatan dan perubahan yang sedang terjadi di lokasi wisata yang Anda tuju secara  berkala. Dalam beberapa waktu terakhir, terdapat beberapa perubahan tata letak di lokasi wisata kami yang bertujuan untuk meningkatkan kenyamanan pengunjung dan memberikan pengalaman yang lebih baik. Beberapa perubahan tersebut antara lain penambahan fasilitas umum seperti toilet dan tempat istirahat, peningkatan kebersihan dan sanitasi area wisata, serta perbaikan infrastruktur yang lebih ramah lingkungan. Selain perubahan tata letak, terdapat juga informasi dari beberapa kegiatan yang akan dilaksanakan di lokasi wisata. Kegiatan tersebut meliputi pertunjukan seni dan budaya, festival, dan kegiatan olahraga yang dapat diikuti oleh pengunjung sesuai dengan jadwal pada tiap-tiap lokasi wisata. Dalam memberikan informasi mengenai kegiatan dan perubahan tata letak di lokasi wisata, kami berharap Anda dapat menikmati liburan yang lebih berkualitas dan berkesan. Kami selalu berusaha untuk memberikan pengalaman liburan yang terbaik bagi setiap pengunjung dan menjaga kualitas layanan kami. Jangan lewatkan kesempatan untuk mengunjungi lokasi wisata kami yang menarik dan indah. Dapatkan pengalaman liburan yang tak terlupakan bersama keluarga dan teman-teman Anda di lokasi wisata tujua yang penuh dengan keindahan dan keunikan. Segera hubungi kami untuk informasi lebih lanjut dan rencanakan liburan Anda bersama vragio.com. Terima kasih telah mempercayakan liburan Anda pada vragio.com."
            }
          />
        </div>
        <div className="img-content relative h-480 w-full -ml-10 md:ml-0 md:w-1/2 mx-auto my-10 md:my-0">
          <img src={require("../../assets/thumbs_1.jpg")} alt="villages images" className="front-image rounded-full h-96 w-48 absolute bottom-0 object-cover" />
          <img src={require("../../assets/thumbs_2.jpg")} alt="villages images2" className="bigger-image rounded-full h-480 w-72 absolute -z-10 bottom-0 left-20 object-cover" />
        </div>
      </div>
    </div>
  );
}

export default Tujuan;
