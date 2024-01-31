const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const progress = document.getElementById("progress");
const formSteps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".progress-step");

let formStepsNum = 0;

nextBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum++;
    updateFormSteps();
    updateProgressbar();
  });
});

prevBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum--;
    updateFormSteps();
    updateProgressbar();
  });
});

function updateFormSteps() {
  formSteps.forEach((formStep) => {
    formStep.classList.contains("form-step-active") &&
      formStep.classList.remove("form-step-active");
  });

  formSteps[formStepsNum].classList.add("form-step-active");
}

function updateProgressbar() {
  progressSteps.forEach((progressStep, idx) => {
    if (idx < formStepsNum + 1) {
      progressStep.classList.add("progress-step-active");
    } else {
      progressStep.classList.remove("progress-step-active");
    }
  });

  // For the Selection of Country, State and City

  const progressActive = document.querySelectorAll(".progress-step-active");

  progress.style.width =
    ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
}

      // Sample state and city data for Argentina
      const statesInArgentina = {
        'Buenosaires': ['Buenos Aires', 'La Plata', 'Rosario', 'Mar del Plata', 'Quilmes', 'San Miguel', 'La Matanza', 'Avellaneda', 'Lanús', 'Lomas de Zamora'],
        'Cordoba': ['Cordoba', 'Villa Maria', 'Rio Cuarto', 'San Francisco', 'Alta Gracia', 'Villa Carlos Paz', 'Río Tercero', 'Bell Ville', 'Jesús María', 'Cosquín'],
        'Mendoza': ['Mendoza', 'San Rafael', 'Godoy Cruz', 'Luján de Cuyo', 'Maipú', 'San Martín', 'Guaymallén', 'Las Heras', 'Malargüe', 'Tunuyán'],
        'Tucuman': ['San Miguel de Tucumán', 'Tafí Viejo', 'Yerba Buena', 'Banda del Río Sali', 'Alderetes', 'Famaillá', 'Aguilares', 'Monteros', 'Concepción', 'Lules'],
        'Salta': ['Salta', 'San Ramón de la Nueva Orán', 'Tartagal', 'San Salvador de Jujuy', 'Palpalá', 'San Pedro', 'Joaquín V. González', 'Embarcación', 'Metán', 'Cafayate'],
        'Misiones': ['Posadas', 'Puerto Iguazú', 'Oberá', 'Eldorado', 'Apóstoles', 'San Vicente', 'Garupá', 'Candelaria', 'Jardín América', 'Montecarlo'],
        'Sanjuan': ['San Juan', 'Rivadavia', 'Chimbas', 'Santa Lucía', 'Pocito', 'Caucete', 'Albardón', 'Rawson', 'Villa Paula de Sarmiento', 'San Martín'],
        'Jujuy': ['San Salvador de Jujuy', 'Palpalá', 'San Pedro', 'Libertador General San Martín', 'Perico', 'El Carmen', 'La Quiaca', 'Abra Pampa', 'Palma Sola', 'Tilcara'],
        'Formosa': ['Formosa', 'Clorinda', 'Pirané', 'Las Lomitas', 'Fontana', 'Ing. Juárez', 'Villa Escolar', 'El Colorado', 'La Rinconada', 'General Güemes'],
        'Neuquen': ['Neuquén', 'Plottier', 'Cutral-Có', 'Centenario', 'Zapala', 'Rincón de los Sauces', 'San Martín de los Andes', 'Chos Malal', 'Villa La Angostura', 'Añelo'],
      };

      // Sample state and city data for Australia
      const statesInAustralia = {
        'New South Wales': ['Sydney', 'Newcastle', 'Central Coast', 'Wollongong', 'Maitland', 'Coffs Harbour', 'Wagga Wagga', 'Albury', 'Tamworth', 'Queanbeyan'],
        'Queensland': ['Brisbane', 'Gold Coast', 'Sunshine Coast', 'Townsville', 'Cairns', 'Toowoomba', 'Mackay', 'Rockhampton', 'Bundaberg', 'Hervey Bay'],
        'Victoria': ['Melbourne', 'Geelong', 'Ballarat', 'Bendigo', 'Melton', 'Mildura', 'Warrnambool', 'Sunbury', 'Shepparton', 'Traralgon'],
        'Western australia': ['Perth', 'Mandurah', 'Bunbury', 'Rockingham', 'Geraldton', 'Albany', 'Kalgoorlie', 'Karratha', 'Broome', 'Port Hedland'],
        'South Australia': ['Adelaide', 'Mount Gambier', 'Whyalla', 'Murray Bridge', 'Port Augusta', 'Port Pirie', 'Gawler', 'Mount Barker', 'Victor Harbor', 'Goolwa'],
        'Tasmania': ['Hobart', 'Launceston', 'Devonport', 'Burnie', 'Ulverstone', 'New Norfolk', 'Kingston', 'Smithton', 'Longford', 'St Helens'],
        'Northern Territory': ['Darwin', 'Palmerston', 'Alice Springs', 'Katherine', 'McMinns Lagoon', 'Nhulunbuy', 'Yulara', 'Howard Springs', 'Tennant Creek', 'Karama'],
        'Australian Capital Territory': ['Canberra'],
        'south australia': ['Adelaide'],
        'Northern Territory': ['Darwin'],
      };

      // Sample state and city data for Brazil
      const statesInBrazil = {
        'Saopaulo': ['Sao Paulo', 'Campinas', 'Guarulhos', 'Sao Bernardo do Campo', 'Santo Andre', 'Osasco', 'Sao Jose dos Campos', 'Sorocaba', 'Ribeirao Preto', 'Santos'],
        'Riodejaneiro': ['Rio de Janeiro', 'Niteroi', 'Sao Goncalo', 'Duque de Caxias', 'Nova Iguacu', 'Belford Roxo', 'Campos dos Goytacazes', 'Petrópolis', 'Volta Redonda', 'Macaé'],
        'Minasgerais': ['Belo Horizonte', 'Contagem', 'Uberlândia', 'Juiz de Fora', 'Betim', 'Montes Claros', 'Ribeirão das Neves', 'Uberaba', 'Governador Valadares', 'Ipatinga'],
        'Bahia': ['Salvador', 'Feira de Santana', 'Vitória da Conquista', 'Camaçari', 'Itabuna', 'Juazeiro', 'Lauro de Freitas', 'Ilhéus', 'Jacobina', 'Barreiras'],
        'Pernambuco': ['Recife', 'Jaboatão dos Guararapes', 'Caruaru', 'Petrolina', 'Olinda', 'Paulista', 'Cabo de Santo Agostinho', 'Camaragibe', 'Garanhuns', 'Vitória de Santo Antão'],
        'Parana': ['Curitiba', 'Londrina', 'Maringá', 'Cascavel', 'Ponta Grossa', 'Foz do Iguaçu', 'São José dos Pinhais', 'Colombo', 'Guarapuava', 'Paranaguá'],
        'Riograndedosul': ['Porto Alegre', 'Caxias do Sul', 'Pelotas', 'Canoas', 'Santa Maria', 'Gravataí', 'Viamão', 'Novo Hamburgo', 'São Leopoldo', 'Rio Grande'],
        'Santacatarina': ['Florianópolis', 'Joinville', 'Blumenau', 'São José', 'Criciúma', 'Lages', 'Palhoça', 'Balneário Camboriú', 'Itajaí', 'Chapecó'],
        'Amazonas': ['Manaus', 'Parintins', 'Itacoatiara', 'Manacapuru', 'Coari', 'Tefé', 'Tabatinga', 'Humaitá', 'Maués', 'Manicoré'],
        'Riograndenortedenorte': ['Porto Velho', 'Ji-Paraná', 'Ariquemes', 'Vilhena', 'Cacoal', 'Jaru', 'Rolim de Moura', 'Guajará-Mirim', 'Pimenta Bueno', 'Ouro Preto do Oeste'],
      };

      // Sample state and city data for Canada
      const statesInCanada = {
        'Ontario': ['Toronto', 'Ottawa', 'Mississauga', 'Brampton', 'Hamilton', 'London', 'Markham', 'Vaughan', 'Kitchener', 'Windsor'],
        'Quebec': ['Montreal', 'Quebec City', 'Laval', 'Gatineau', 'Longueuil', 'Sherbrooke', 'Saguenay', 'Levis', 'Trois-Rivieres', 'Terrebonne'],
        'Britishcolumbia': ['Vancouver', 'Surrey', 'Burnaby', 'Kelowna', 'Kamloops', 'Victoria', 'Nanaimo', 'Prince George', 'Abbotsford', 'Chilliwack'],
        'Alberta': ['Calgary', 'Edmonton', 'Red Deer', 'Lethbridge', 'St. Albert', 'Medicine Hat', 'Grande Prairie', 'Airdrie', 'Spruce Grove', 'Lloydminster'],
        'Manitoba': ['Winnipeg', 'Brandon', 'Steinbach', 'Portage la Prairie', 'Thompson', 'Selkirk', 'Dauphin', 'Winkler', 'Morden', 'Flin Flon'],
        'Saskatchewan': ['Saskatoon', 'Regina', 'Prince Albert', 'Moose Jaw', 'Yorkton', 'Swift Current', 'North Battleford', 'Estevan', 'Weyburn', 'Lloydminster'],
        'Nova scotia': ['Halifax', 'Dartmouth', 'Sydney', 'Truro', 'New Glasgow', 'Kentville', 'Amherst', 'Bridgewater', 'Yarmouth', 'Glace Bay'],
        'Newbrunswick': ['Saint John', 'Moncton', 'Fredericton', 'Miramichi', 'Bathurst', 'Edmundston', 'Campbellton', 'Oromocto', 'Grand Falls', 'Caraquet'],
        'Newfoundlandandlabrador': ['St. Johns', 'Mount Pearl', 'Corner Brook', 'Conception Bay South', 'Grand Falls-Windsor', 'Gander', 'Labrador City', 'Stephenville', 'Marystown', 'Bay Roberts'],
        'Princeedwardisland': ['Charlottetown', 'Summerside', 'Stratford', 'Cornwall', 'Montague', 'Kensington', 'Souris', 'Alberton', 'Tignish', 'Georgetown'],
      };

      // Sample state and city data for China
      const statesInChina = {
        'Beijing': ['Beijing', 'Tianjin', 'Shijiazhuang', 'Baoding', 'Langfang', 'Zhangjiakou', 'Chengde', 'Cangzhou', 'Hengshui', 'Xingtai'],
        'Shanghai': ['Shanghai', 'Nanjing', 'Hangzhou', 'Suzhou', 'Wuxi', 'Nantong', 'Lianyungang', 'Hefei', 'Ningbo', 'Jinhua'],
        'Guangdong': ['Guangzhou', 'Shenzhen', 'Dongguan', 'Foshan', 'Zhuhai', 'Huizhou', 'Zhongshan', 'Jiangmen', 'Shantou', 'Meizhou'],
        'Henan': ['Zhengzhou', 'Luoyang', 'Kaifeng', 'Pingdingshan', 'Anyang', 'Xinxiang', 'Nanyang', 'Xuchang', 'Luohe', 'Jiaozuo'],
        'Sichuan': ['Chengdu', 'Mianyang', 'Luzhou', 'Deyang', 'Nanchong', 'Suining', 'Guangyuan', 'Leshan', 'Meishan', 'Zigong'],
        'Hebei': ['Shijiazhuang', 'Tangshan', 'Qinhuangdao', 'Handan', 'Xingtai', 'Baoding', 'Zhangjiakou', 'Chengde', 'Langfang', 'Hengshui'],
        'Yunnan': ['Kunming', 'Qujing', 'Yuxi', 'Baoshan', 'Zhaotong', 'Lijiang', 'Puer', 'Lincang', 'Dali', 'Wenshan'],
        'Hubei': ['Wuhan', 'Huangshi', 'Shiyan', 'Yichang', 'Xiangyang', 'Ezhou', 'Jingmen', 'Suizhou', 'Huanggang', 'Xianning'],
        'Fujian': ['Fuzhou', 'Xiamen', 'Quanzhou', 'Putian', 'Zhangzhou', 'Nanping', 'Longyan', 'Sanming', 'Ningde', 'Nanao'],
        'Shandong': ['Jinan', 'Qingdao', 'Zibo', 'Yantai', 'Weifang', 'Jining', 'Weihai', 'Laizhou', 'Linyi', 'Dezhou'],
      };

      // Sample state and city data for Egypt
      const statesInEgypt = {
        'Cairo': ['Cairo', 'Giza', 'Alexandria', 'Shubra El-Kheima', 'Port Said', 'Suez', 'Luxor', 'Asyut', 'Ismailia', 'Fayyum'],
        'Giza': ['Giza', '6th of October City', 'Al Haram', 'Imbaba', 'Hawsh Eisa', 'Kirdasa', 'Saf', 'Sheikh Zayed City', 'Mansoura', 'Tanta'],
        'Alexandria': ['Alexandria', 'El Dekheila', 'Borg El Arab', 'Abu Qir', 'Rosetta', 'Damanhur', 'Kafr el-Dawwar', 'Kom Hamada', 'Idku', 'Sidi Thabet'],
        'Qalyubia': ['Banha', 'Shubra El-Kheima', 'Kalyoub', 'Maiyet Al Garhy', 'Kafr Shukr', 'Tukh', 'Kaha', 'Zagazig', 'Zifta', 'Mashtul El Souk'],
        'Sharqia': ['Zagazig', 'Ain Shams', 'Al Husseiniya', 'Faqous', 'Minya Al Qamh', 'Bilbays', 'Hihya', 'Kafr Saqr', 'Abo Hammad', 'Abu Kabir'],
        'Luxor': ['Luxor', 'Aswan', 'Qena', 'Sohag', 'Abu Simbel', 'Armant', 'Esna', 'Ismailia', 'Daraw', 'Nag Hammadi'],
        'Aswan': ['Aswan', 'Kom Ombo', 'Edfu', 'Daraw', 'Nasr Al Nuba', 'Kalabsha', 'Kawm Umbu', 'Sehil', 'Gharb Sohail', 'Abu Simbel'],
        'Ismailia': ['Ismailia', 'Fayid', 'Qantara', 'Qantara Sharq', 'Toukh', 'Kafr Saqr', 'Abu Sultan', 'Abu Swear', 'Nefesha', 'Qantara West'],
        'Fayyum': ['Fayyum', 'Fayid', 'Tamiyah', 'Ibsheway', 'Sinnuris', 'Yusuf As Sidiq', 'Shubra', 'Ibsheway', 'Sinnuris', 'Yusuf As Sidiq'],
      };

      // Sample state and city data for France
      const statesInFrance = {
        'Iledefrance': ['Paris', 'Versailles', 'Créteil', 'Nanterre', 'Bobigny', 'Evry', 'Pontoise', 'Melun', 'Cergy', 'Meaux'],
        'Provencealpes': ['Marseille', 'Nice', 'Toulon', 'Aix-en-Provence', 'Avignon', 'La Seyne-sur-Mer', 'Hyères', 'Cannes', 'Arles', 'Martigues'],
        'Occitanie': ['Toulouse', 'Montpellier', 'Nîmes', 'Perpignan', 'Béziers', 'Montauban', 'Narbonne', 'Albi', 'Carcassonne', 'Sète'],
        'Auvergnerhonealpes': ['Lyon', 'Saint-Étienne', 'Grenoble', 'Villeurbanne', 'Clermont-Ferrand', 'Chambéry', 'Annecy', 'Roanne', 'Saint-Priest', 'Vénissieux'],
        'Hautsdefrance': ['Lille', 'Amiens', 'Roubaix', 'Tourcoing', 'Dunkerque', 'Calais', 'Villeneuve-d\'Ascq', 'Saint-Quentin', 'Beauvais', 'Valenciennes'],
        'Nouvelleaquitaine': ['Bordeaux', 'Limoges', 'Pau', 'La Rochelle', 'Mérignac', 'Pessac', 'Bayonne', 'Mont-de-Marsan', 'Périgueux', 'Angoulême'],
        'Grandest': ['Strasbourg', 'Mulhouse', 'Colmar', 'Thionville', 'Épinal', 'Saint-Dié-des-Vosges', 'Schiltigheim', 'Illkirch-Graffenstaden', 'Haguenau', 'Nancy'],
        'Paysdelaloire': ['Nantes', 'Angers', 'Le Mans', 'Saint-Nazaire', 'Cholet', 'Laval', 'La Roche-sur-Yon', 'Saint-Herblain', 'Rezé', 'Saint-Sébastien-sur-Loire'],
        'Brittany': ['Rennes', 'Brest', 'Quimper', 'Lorient', 'Vannes', 'Saint-Malo', 'Saint-Brieuc', 'Dinard', 'Fougères', 'Lanester'],
        'Normandy': ['Rouen', 'Caen', 'Le Havre', 'Cherbourg-en-Cotentin', 'Évreux', 'Dieppe', 'Sotteville-lès-Rouen', 'Saint-Étienne-du-Rouvray', 'Alençon', 'Vernon'],
      };

      // Sample state and city data for Germany
      const statesInGermany = {
        'Bavaria': ['Munich', 'Nuremberg', 'Augsburg', 'Regensburg', 'Würzburg', 'Ingolstadt', 'Fürth', 'Erlangen', 'Bamberg', 'Aschaffenburg'],
        'Northrhinewestphalia': ['Cologne', 'Düsseldorf', 'Dortmund', 'Essen', 'Duisburg', 'Bochum', 'Wuppertal', 'Bielefeld', 'Bonn', 'Münster'],
        'Badenwurttemberg': ['Stuttgart', 'Mannheim', 'Karlsruhe', 'Freiburg', 'Heidelberg', 'Heilbronn', 'Ulm', 'Pforzheim', 'Reutlingen', 'Friedrichshafen'],
        'LowerSaxony': ['Hanover', 'Braunschweig', 'Osnabrück', 'Oldenburg', 'Göttingen', 'Wolfsburg', 'Salzgitter', 'Hildesheim', 'Wolfsburg', 'Celle'],
        'Hesse': ['Frankfurt', 'Wiesbaden', 'Kassel', 'Darmstadt', 'Offenbach', 'Hanau', 'Gießen', 'Marburg', 'Wetzlar', 'Fulda'],
        'Rhinelandpalatinate': ['Mainz', 'Ludwigshafen', 'Koblenz', 'Trier', 'Kaiserslautern', 'Worms', 'Speyer', 'Neuwied', 'Neustadt', 'Andernach'],
        'Schleswigholstein': ['Kiel', 'Lübeck', 'Flensburg', 'Neumünster', 'Norderstedt', 'Elmshorn', 'Pinneberg', 'Itzehoe', 'Husum', 'Heide'],
        'Saarland': ['Saarbrücken', 'Neunkirchen', 'Homburg', 'Völklingen', 'Sankt Ingbert', 'Merzig', 'Saarlouis', 'Dillingen', 'Lebach', 'Bous'],
        'Thuringia': ['Erfurt', 'Jena', 'Gera', 'Weimar', 'Gotha', 'Eisenach', 'Nordhausen', 'Suhl', 'Altenburg', 'Mühlhausen'],
        'Saxony': ['Dresden', 'Leipzig', 'Chemnitz', 'Zwickau', 'Plauen', 'Görlitz', 'Freiberg', 'Bautzen', 'Pirna', 'Freital'],
      };

      // Sample state and city data for India
      const statesInIndia = {
        'Maharashtra': ['Mumbai', 'Pune', 'Nagpur', 'Thane', 'Nashik', 'Aurangabad', 'Solapur', 'Kolhapur', 'Navi Mumbai', 'Amravati'],
        'Tamilnadu': ['Chennai', 'Coimbatore', 'Madurai', 'Tiruchirappalli', 'Salem', 'Tirunelveli', 'Erode', 'Vellore', 'Thoothukudi', 'Dindigul'],
        'Uttarpradesh': ['Lucknow', 'Kanpur', 'Ghaziabad', 'Agra', 'Meerut', 'Varanasi', 'Allahabad', 'Bareilly', 'Aligarh', 'Moradabad'],
        'Andhrapradesh': ['Hyderabad', 'Visakhapatnam', 'Vijayawada', 'Warangal', 'Guntur', 'Nellore', 'Rajahmundry', 'Kurnool', 'Tirupati', 'Kakinada'],
        'Karnataka': ['Bangalore', 'Hubli', 'Mysore', 'Gulbarga', 'Mangalore', 'Belgaum', 'Davanagere', 'Bellary', 'Bijapur', 'Shimoga'],
        'Kerala': ['Thiruvananthapuram', 'Kochi', 'Kozhikode', 'Kollam', 'Thrissur', 'Alappuzha', 'Palakkad', 'Kottayam', 'Kannur', 'Manjeri'],
        'Westbengal': ['Kolkata', 'Asansol', 'Siliguri', 'Durgapur', 'Bardhaman', 'English Bazar', 'Baharampur', 'Habra', 'Kharagpur', 'Shantipur'],
        'Rajasthan': ['Jaipur', 'Jodhpur', 'Kota', 'Bikaner', 'Ajmer', 'Udaipur', 'Bhilwara', 'Alwar', 'Bharatpur', 'Sikar'],
        'Punjab': ['Ludhiana', 'Amritsar', 'Jalandhar', 'Patiala', 'Bathinda', 'Hoshiarpur', 'Pathankot', 'Moga', 'Firozpur', 'Phagwara'],
        'Gujarat': ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Bhavnagar', 'Jamnagar', 'Junagadh', 'Gandhinagar', 'Nadiad', 'Anand']
      };

// You can add more states and cities as needed.


      // Sample state and city data for the United States
      const statesInAmerica = {
        'Newyork': ['New York', 'Buffalo', 'Rochester', 'Yonkers', 'Syracuse', 'Albany', 'New Rochelle', 'Mount Vernon', 'Schenectady', 'Utica'],
        'California': ['Los Angeles', 'San Diego', 'San Jose', 'San Francisco', 'Fresno', 'Sacramento', 'Long Beach', 'Oakland', 'Bakersfield', 'Anaheim'],
        'Texas': ['Houston', 'San Antonio', 'Dallas', 'Austin', 'Fort Worth', 'El Paso', 'Arlington', 'Corpus Christi', 'Plano', 'Laredo'],
        'Florida': ['Jacksonville', 'Miami', 'Tampa', 'Orlando', 'St. Petersburg', 'Hialeah', 'Tallahassee', 'Fort Lauderdale', 'Port St. Lucie', 'Cape Coral'],
        'Illinois': ['Chicago', 'Aurora', 'Rockford', 'Joliet', 'Naperville', 'Springfield', 'Peoria', 'Elgin', 'Waukegan', 'Champaign'],
        'Pennsylvania': ['Philadelphia', 'Pittsburgh', 'Allentown', 'Erie', 'Reading', 'Scranton', 'Bethlehem', 'Lancaster', 'Harrisburg', 'Altoona'],
        'Ohio': ['Columbus', 'Cleveland', 'Cincinnati', 'Toledo', 'Akron', 'Dayton', 'Parma', 'Canton', 'Youngstown', 'Lorain'],
        'Georgia': ['Atlanta', 'Columbus', 'Savannah', 'Macon', 'Athens', 'Sandy Springs', 'Roswell', 'Albany', 'Johns Creek', 'Warner Robins'],
        'Northcarolina': ['Charlotte', 'Raleigh', 'Greensboro', 'Durham', 'Winston-Salem', 'Fayetteville', 'Cary', 'Wilmington', 'High Point', 'Concord'],
        'Arizona': ['Phoenix', 'Tucson', 'Mesa', 'Chandler', 'Glendale', 'Scottsdale', 'Gilbert', 'Tempe', 'Peoria', 'Surprise'],
      };



      const countrySelect = document.getElementById('country');
      const stateSelect = document.getElementById('state');
      const citySelect = document.getElementById('city');



      // Function to populate the state dropdown based on the selected country
      countrySelect.addEventListener('change', function () {
          const selectedCountry = countrySelect.value;
          
          stateSelect.innerHTML = '<option value="" disabled selected>Select State</option>';
          citySelect.innerHTML = '<option value="" disabled selected>Select City</option>';
          
              // Check the selected country and populate the state dropdown accordingly
            if (selectedCountry === 'argentina') {
              for (const state in statesInArgentina) {
                  const option = document.createElement('option');
                  option.value = state;
                  option.textContent = state;
                  stateSelect.appendChild(option);
              }
              stateSelect.disabled = false;
          } else if (selectedCountry === 'australia') {
              for (const state in statesInAustralia) {
                  const option = document.createElement('option');
                  option.value = state;
                  option.textContent = state;
                  stateSelect.appendChild(option);
              }
              stateSelect.disabled = false;
          } else if (selectedCountry === 'brazil') {
              for (const state in statesInBrazil) {
                  const option = document.createElement('option');
                  option.value = state;
                  option.textContent = state;
                  stateSelect.appendChild(option);
              }
              stateSelect.disabled = false;
          } else if (selectedCountry === 'canada') {
              for (const province in statesInCanada) {
                  const option = document.createElement('option');
                  option.value = province;
                  option.textContent = province;
                  stateSelect.appendChild(option);
              }
              stateSelect.disabled = false;
          } else if (selectedCountry === 'china') {
              for (const province in statesInChina) {
                  const option = document.createElement('option');
                  option.value = province;
                  option.textContent = province;
                  stateSelect.appendChild(option);
              }
              stateSelect.disabled = false;
          } else if (selectedCountry === 'egypt') {
              for (const governorate in statesInEgypt) {
                  const option = document.createElement('option');
                  option.value = governorate;
                  option.textContent = governorate;
                  stateSelect.appendChild(option);
              }
              stateSelect.disabled = false;
          } else if (selectedCountry === 'france') {
              for (const region in statesInFrance) {
                  const option = document.createElement('option');
                  option.value = region;
                  option.textContent = region;
                  stateSelect.appendChild(option);
              }
              stateSelect.disabled = false;
          } else if (selectedCountry === 'germany') {
              for (const state in statesInGermany) {
                  const option = document.createElement('option');
                  option.value = state;
                  option.textContent = state;
                  stateSelect.appendChild(option);
              }
              stateSelect.disabled = false;
          } else if (selectedCountry === 'india') {
              for (const state in statesInIndia) {
                  const option = document.createElement('option');
                  option.value = state;
                  option.textContent = state;
                  stateSelect.appendChild(option);
              }
              stateSelect.disabled = false;
          } else if (selectedCountry === 'unitedstates') {
              for (const state in statesInAmerica) {
                  const option = document.createElement('option');
                  option.value = state;
                  option.textContent = state;
                  stateSelect.appendChild(option);
              }
              stateSelect.disabled = false;
          }

          else {
              stateSelect.disabled = true;
          }

      });

      // Function to populate the city dropdown based on the selected state
      stateSelect.addEventListener('change', function () {
          const selectedState = stateSelect.value;
          citySelect.innerHTML = '<option value="" disabled selected>Select City</option>';
          
                  if (statesInArgentina[selectedState]) {
            for (const city of statesInArgentina[selectedState]) {
                const option = document.createElement('option');
                option.value = city;
                option.textContent = city;
                citySelect.appendChild(option);
            }
            citySelect.disabled = false;
        }

        else if (statesInAustralia[selectedState]) {
            for (const city of statesInAustralia[selectedState]) {
                const option = document.createElement('option');
                option.value = city;
                option.textContent = city;
                citySelect.appendChild(option);
            }
            citySelect.disabled = false;
        }

        else if (statesInBrazil[selectedState]) {
            for (const city of statesInBrazil[selectedState]) {
                const option = document.createElement('option');
                option.value = city;
                option.textContent = city;
                citySelect.appendChild(option);
            }
            citySelect.disabled = false;
        }
 
        else if (statesInCanada[selectedState]) {
            for (const city of statesInCanada[selectedState]) {
                const option = document.createElement('option');
                option.value = city;
                option.textContent = city;
                citySelect.appendChild(option);
            }
            citySelect.disabled = false;
        }

        else if (statesInChina[selectedState]) {
            for (const city of statesInChina[selectedState]) {
                const option = document.createElement('option');
                option.value = city;
                option.textContent = city;
                citySelect.appendChild(option);
            }
            citySelect.disabled = false;
        }
  
        else if (statesInEgypt[selectedState]) {
            for (const city of statesInEgypt[selectedState]) {
                const option = document.createElement('option');
                option.value = city;
                option.textContent = city;
                citySelect.appendChild(option);
            }
            citySelect.disabled = false;
        }
 
        else if (statesInFrance[selectedState]) {
            for (const city of statesInFrance[selectedState]) {
                const option = document.createElement('option');
                option.value = city;
                option.textContent = city;
                citySelect.appendChild(option);
            }
            citySelect.disabled = false;
        }

        else if (statesInGermany[selectedState]) {
            for (const city of statesInGermany[selectedState]) {
                const option = document.createElement('option');
                option.value = city;
                option.textContent = city;
                citySelect.appendChild(option);
            }
            citySelect.disabled = false;
        }

        //NEW
        else if (statesInIndia[selectedState]) {
            for (const city of statesInIndia[selectedState]) {
                const option = document.createElement('option');
                option.value = city;
                option.textContent = city;
                citySelect.appendChild(option);
            }
            citySelect.disabled = false;
        }
 
        else if (statesInAmerica[selectedState]) {
            for (const city of statesInAmerica[selectedState]) {
                const option = document.createElement('option');
                option.value = city;
                option.textContent = city;
                citySelect.appendChild(option);
            }
            citySelect.disabled = false;
        }
          
          else {
              citySelect.disabled = true;
          }
      });
