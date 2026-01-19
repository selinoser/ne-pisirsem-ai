🍳 Ne Pişirsem?
Ne Pişirsem?, mutfağınızdaki malzemeleri israf etmeden, yapay zeka desteğiyle gurme tarifler oluşturmanızı sağlayan modern bir web uygulamasıdır. Kullanıcıların girdiği malzemeleri analiz eder ve Google Gemini AI kullanarak saniyeler içinde 6 farklı yaratıcı tarif sunar.

✨ Özellikler
🤖 Yapay Zeka Destekli: Google Gemini 2.5 Flash ile gerçek zamanlı tarif üretimi.
📸 Görsel Entegrasyonu: Pexels API ile tariflere uygun profesyonel yemek fotoğrafları.
🌓 Koyu Mod (Dark Mode): Sistem tercihlerine uyumlu veya manuel değiştirilebilir şık tema.
📱 Responsive Tasarım: Mobil, tablet ve masaüstü cihazlarla tam uyumlu.
✨ Modern UI: Glassmorphism etkileri, akıcı animasyonlar ve yüksek kaliteli kullanıcı deneyimi.

🛠 Kullanılan Teknolojiler
Framework: Next.js 14/15 (App Router)
Styling: Tailwind CSS
AI Model: Google Gemini AI
Image API: Pexels API
Icons: Lucide React
Animations: Framer Motion / Tailwind Transitions

🚀 Kurulum
Projeyi yerel bilgisayarınızda çalıştırmak için şu adımları izleyin:

Depoyu klonlayın:

Bash

git clone 
cd ne-pisirsem
Bağımlılıkları yükleyin:

Bash

npm install
# veya
yarn install
Çevresel değişkenleri ayarlayın: Kök dizinde bir .env.local dosyası oluşturun ve API anahtarlarınızı ekleyin:

Kod snippet'i

GEMINI_TOKEN=your_gemini_api_key_here
PEXELS_TOKEN=your_pexels_api_key_here
Uygulamayı başlatın:

Bash

npm run dev
Tarayıcınızda http://localhost:3000 adresini açarak uygulamayı görebilirsiniz.

