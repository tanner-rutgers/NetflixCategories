const CATEGORIES = {
  'Action & Adventure': {
    code: 1365,
    subcategories: {
      'Asian Action Movies': { code: 77232 },
      'Classic Action & Adventure': { code: 46576 },
      'Action Comedies': { code: 43040 },
      'Action Thrillers': { code: 43048 },
      'Adventures': { code: 7442 },
      'Comic Book and Superhero Movies': { code: 10118 },
      'Westerns': { code: 7700 },
      'Spy Action & Adventure': { code: 10702 },
      'Crime Action & Adventure': { code: 9584 },
      'Foreign Action & Adventure': { code: 11828 },
      'Martial Arts Movies': { code: 8985 },
      'Military Action & Adventure': { code: 2125 },
    }
  },

  'Anime': {
    code: 7424,
    subcategories: {
      'Adult Animation': { code: 11881 },
      'Anime Action': { code: 2653 },
      'Anime Comedies': { code: 9302 },
      'Anime Dramas': { code: 452 },
      'Anime Features': { code: 3063 },
      'Anime Sci-Fi': { code: 2729 },
      'Anime Horror': { code: 10695 },
      'Anime Fantasy': { code: 11146 },
      'Anime Series': { code: 6721 },
    }
  },

  'Children & Family Movies': {
    code: 783,
    subcategories: {
      'Movies for ages 0 to 2': { code: 6796 },
      'Movies for ages 2 to 4': { code: 6218 },
      'Movies for ages 5 to 7': { code: 5455 },
      'Movies for ages 8 to 10': { code: 561 },
      'Movies for ages 11 to 12': { code: 6962 },
      'Education for Kids': { code: 10659 },
      'Disney': { code: 67673 },
      'Movies based on children’s books': { code: 10056 },
      'Family Features': { code: 51056 },
      'TV Cartoons': { code: 11177 },
      'Kids’ TV': { code: 27346 },
      'Kids Music': { code: 52843 },
      'Animal Tales': { code: 5507 },
    }
  },

  'Classic Movies': {
    code: 31574,
    subcategories: {
      'Classic Comedies': { code: 31694 },
      'Classic Dramas': { code: 29809 },
      'Classic Sci-Fi & Fantasy': { code: 47147 },
      'Classic Thrillers': { code: 46588 },
      'Film Noir': { code: 7687 },
      'Classic War Movies': { code: 48744 },
      'Epics': { code: 52858 },
      'Classic Foreign Movies': { code: 32473 },
      'Silent Movies': { code: 53310 },
      'Classic Westerns': { code: 47465 },
    }
  },

  'Comedies': {
    code: 6548,
    subcategories: {
      'Dark Comedies': { code: 869 },
      'Foreign Comedies': { code: 4426 },
      'Late Night Comedies': { code: 1402 },
      'Mockumentaries': { code: 26 },
      'Political Comedies': { code: 2700 },
      'Screwball Comedies': { code: 9702 },
      'Sports Comedies': { code: 5286 },
      'Stand-up Comedy': { code: 11559 },
      'Teen Comedies': { code: 3519 },
      'Satires': { code: 4922 },
      'Romantic Comedies': { code: 5475 },
      'Slapstick Comedies': { code: 10256 },
    }
  },

  'Cult Movies': {
    code: 7627,
    subcategories: {
      'B-Horror Movies': { code: 8195 },
      'Campy Movies': { code: 1252 },
      'Cult Horror Movies': { code: 10944 },
      'Cult Sci-Fi & Fantasy': { code: 4734 },
      'Cult Comedies': { code: 9434 },
    }
  },


  'Documentaries': {
    code: 6839,
    subcategories: {
      'Biographical Documentaries': { code: 3652 },
      'Crime Documentaries': { code: 9875 },
      'Foreign Documentaries': { code: 5161 },
      'Historical Documentaries': { code: 5349 },
      'Military Documentaries': { code: 4006 },
      'Sports Documentaries': { code: 180 },
      'Music & Concert Documentaries': { code: 90361 },
      'Travel & Adventure Documentaries': { code: 1159 },
      'Political Documentaries': { code: 7018 },
      'Religious Documentaries': { code: 10005 },
      'Science & Nature Documentaries': { code: 2595 },
      'Social & Cultural Documentaries': { code: 3675 },
    }
  },

  'Dramas': {
    code: 5763,
    subcategories: {
      'Biographical Dramas': { code: 3179 },
      'Classic Dramas': { code: 29809 },
      'Courtroom Dramas': { code: 528582748 },
      'Crime Dramas': { code: 6889 },
      'Dramas based on Books': { code: 4961 },
      'Dramas based on real life': { code: 3653 },
      'Tearjerkers': { code: 6384 },
      'Foreign Dramas': { code: 2150 },
      'Sports Dramas': { code: 7243 },
      'Gay & Lesbian Dramas': { code: 500 },
      'Independent Dramas': { code: 384 },
      'Teen Dramas': { code: 9299 },
      'Military Dramas': { code: 11 },
      'Period Pieces': { code: 12123 },
      'Political Dramas': { code: 6616 },
      'Romantic Dramas': { code: 1255 },
      'Showbiz Dramas': { code: 5012 },
      'Social Issue Dramas': { code: 3947 },
    }
  },

  'Faith & Spirituality': {
    code: 26835,
    subcategories: {
      'Faith & Spirituality Movies': { code: 52804 },
      'Spiritual Documentaries': { code: 2760 },
      'Kids Faith & Spirituality': { code: 751423 },
    }
  },

  'Foreign Movies': {
    code: 7462,
    subcategories: {
      'Art House Movies': { code: 29764 },
      'Foreign Action & Adventure': { code: 11828 },
      'Classic Foreign Movies': { code: 32473 },
      'Foreign Comedies': { code: 4426 },
      'Foreign Documentaries': { code: 5161 },
      'Foreign Dramas': { code: 2150 },
      'Foreign Gay & Lesbian Movies': { code: 8243 },
      'Foreign Horror Movies': { code: 8654 },
      'Foreign Sci-Fi & Fantasy': { code: 6485 },
      'Foreign Thrillers': { code: 10306 },
      'Romantic Foreign Movies': { code: 7153 },
      'African Movies': { code: 3761 },
      'Australian Movies': { code: 5230 },
      'Belgian Movies': { code: 262 },
      'Korean Movies': { code: 5685 },
      'Latin American Movies': { code: 1613 },
      'Middle Eastern Movies': { code: 5875 },
      'New Zealand Movies': { code: 63782 },
      'Russian': { code: 11567 },
      'Scandinavian Movies': { code: 9292 },
      'Southeast Asian Movies': { code: 9196 },
      'Spanish Movies': { code: 58741 },
      'Greek Movies': { code: 61115 },
      'German Movies': { code: 58886 },
      'French Movies': { code: 58807 },
      'Eastern European Movies': { code: 5254 },
      'Dutch Movies': { code: 10606 },
      'Irish Movies': { code: 58750 },
      'Japanese Movies': { code: 10398 },
      'Italian Movies': { code: 8221 },
      'Indian Movies': { code: 10463 },
      'Chinese Movies': { code: 3960 },
      'British Movies': { code: 10757 },
    }
  },

  'Gay & Lesbian Movies': {
    code: 5977,
    subcategories: {
      'Gay & Lesbian Comedies': { code: 7120 },
      'Gay & Lesbian Dramas': { code: 500 },
      'Romantic Gay & Lesbian Movies': { code: 3329 },
      'Foreign Gay & Lesbian Movies': { code: 8243 },
      'Gay & Lesbian Documentaries': { code: 4720 },
      'Gay & Lesbian TV Shows': { code: 65263 },
    }
  },

  'Horror Movies': {
    code: 8711,
    subcategories: {
      'B-Horror Movies': { code: 8195 },
      'Creature Features': { code: 6895 },
      'Cult Horror Movies': { code: 10944 },
      'Deep Sea Horror Movies': { code: 45028 },
      'Foreign Horror Movies': { code: 8654 },
      'Horror Comedy': { code: 89585 },
      'Monster Movies': { code: 947 },
      'Slasher and Serial Killer Movies': { code: 8646 },
      'Supernatural Horror Movies': { code: 42023 },
      'Teen Screams': { code: 52147 },
      'Vampire Horror Movies': { code: 75804 },
      'Werewolf Horror Movies': { code: 75930 },
      'Zombie Horror Movies': { code: 75405 },
      'Satanic Stories': { code: 6998 },
    }
  },

  'Independent Movies': {
    code: 7077,
    subcategories: {
      'Experimental Movies': { code: 11079 },
      'Independent Action & Adventure': { code: 11804 },
      'Independent Thrillers': { code: 3269 },
      'Romantic Independent Movies': { code: 9916 },
      'Independent Comedies': { code: 4195 },
      'Independent Dramas': { code: 384 },
    }
  },

  'Music': {
    code: 1701,
    subcategories: {
      'Kids Music': { code: 52843 },
      'Country & Western/Folk': { code: 1105 },
      'Jazz & Easy Listening': { code: 10271 },
      'Latin Music': { code: 10741 },
      'Urban & Dance Concerts': { code: 9472 },
      'World Music Concerts': { code: 2856 },
      'Rock & Pop Concerts': { code: 3278 },
      'Musicals': { code: 13335 },
      'Classic Musicals': { code: 32392 },
      'Disney Musicals': { code: 59433 },
      'Showbiz Musicals': { code: 13573 },
      'Stage Musicals': { code: 55774 },
    }
  },

  'Romantic Movies': {
    code: 8883,
    subcategories: {
      'Romantic Favorites': { code: 502675 },
      'Quirky Romance': { code: 36103 },
      'Romantic Independent Movies': { code: 9916 },
      'Romantic Foreign Movies': { code: 7153 },
      'Romantic Dramas': { code: 1255 },
      'Steamy Romantic Movies': { code: 35800 },
      'Classic Romantic Movies': { code: 31273 },
      'Romantic Comedies': { code: 5475 },
    }
  },

  'Sci-Fi & Fantasy': {
    code: 1492,
    subcategories: {
      'Action Sci-Fi & Fantasy': { code: 1568 },
      'Alien Sci-Fi': { code: 3327 },
      'Classic Sci-Fi & Fantasy': { code: 47147 },
      'Cult Sci-Fi & Fantasy': { code: 4734 },
      'Fantasy Movies': { code: 9744 },
      'Sci-Fi Adventure': { code: 6926 },
      'Sci-Fi Dramas': { code: 3916 },
      'Sci-Fi Horror Movies': { code: 1694 },
      'Sci-Fi Thrillers': { code: 11014 },
      'Foreign Sci-Fi & Fantasy': { code: 6485 },
    }
  },

  'Sports Movies': {
    code: 4370,
    subcategories: {
      'Sports Comedies': { code: 5286 },
      'Sports Documentaries': { code: 180 },
      'Sports Dramas': { code: 7243 },
      'Baseball Movies': { code: 12339 },
      'Football Movies': { code: 12803 },
      'Boxing Movies': { code: 12443 },
      'Soccer Movies': { code: 12549 },
      'Martial Arts, Boxing & Wrestling': { code: 6695 },
      'Basketball Movies': { code: 12762 },
      'Sports & Fitness': { code: 9327 },
    }
  },

  'Thrillers': {
    code: 8933,
    subcategories: {
      'Action Thrillers': { code: 43048 },
      'Classic Thrillers': { code: 46588 },
      'Crime Thrillers': { code: 10499 },
      'Foreign Thrillers': { code: 10306 },
      'Independent Thrillers': { code: 3269 },
      'Gangster Movies': { code: 31851 },
      'Psychological Thrillers': { code: 5505 },
      'Political Thrillers': { code: 10504 },
      'Mysteries': { code: 9994 },
      'Sci-Fi Thrillers': { code: 11014 },
      'Spy Thrillers': { code: 9147 },
      'Steamy Thrillers': { code: 972 },
      'Supernatural Thrillers': { code: 11140 },
    }
  },

  'TV Shows': {
    code: 83,
    subcategories: {
      'British TV Shows': { code: 52117 },
      'Classic TV Shows': { code: 46553 },
      'Crime TV Shows': { code: 26146 },
      'Cult TV Shows': { code: 74652 },
      'Food & Travel TV': { code: 72436 },
      'Kids’ TV': { code: 27346 },
      'Korean TV Shows': { code: 67879 },
      'Miniseries': { code: 4814 },
      'Military TV Shows': { code: 25804 },
      'Science & Nature TV': { code: 52780 },
      'TV Action & Adventure': { code: 10673 },
      'TV Comedies': { code: 10375 },
      'TV Documentaries': { code: 10105 },
      'TV Dramas': { code: 11714 },
      'TV Horror': { code: 83059 },
      'TV Mysteries': { code: 4366 },
      'TV Sci-Fi & Fantasy': { code: 1372 },
      'Reality TV': { code: 9833 },
      'Teen TV Shows': { code: 60951 },
    }
  }
}