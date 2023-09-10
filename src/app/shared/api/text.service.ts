import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextService {

  constructor() { }
  getData() {
    return [
      [
        "Team",
        [
          {
            "key": "Assessment",
            "doc_count": 17
          },
          {
            "key": "Brand and Marketing",
            "doc_count": 8
          },
          {
            "key": "Central",
            "doc_count": 12
          },
          {
            "key": "Client Acquisition",
            "doc_count": 6
          },
          {
            "key": "Community & Events",
            "doc_count": 7
          },
          {
            "key": "Consulting",
            "doc_count": 24
          },
          {
            "key": "Finance, Accounts and Compliance",
            "doc_count": 2
          },
          {
            "key": "Operations",
            "doc_count": 8
          },
          {
            "key": "People and Culture",
            "doc_count": 4
          },
          {
            "key": "Research and Insights",
            "doc_count": 5
          },
          {
            "key": "Sales",
            "doc_count": 12
          }
        ]
      ],
      [
        "Band",
        [
          {
            "key": "Band A",
            "doc_count": 47
          },
          {
            "key": "Band C",
            "doc_count": 31
          },
          {
            "key": "Band E",
            "doc_count": 15
          },
          {
            "key": "Band M",
            "doc_count": 9
          },
          {
            "key": "NA",
            "doc_count": 3
          }
        ]
      ],
      [
        "Manager",
        [
          {
            "key": "Adishva Doshi",
            "doc_count": 4
          },
          {
            "key": "Akshat Shah",
            "doc_count": 8
          },
          {
            "key": "Alistair Menezes",
            "doc_count": 3
          },
          {
            "key": "Amish Engineer",
            "doc_count": 7
          },
          {
            "key": "Anita Borate",
            "doc_count": 2
          },
          {
            "key": "Ankita Parikh ",
            "doc_count": 1
          },
          {
            "key": "Anoop Sequeira",
            "doc_count": 3
          },
          {
            "key": "Anurag Gupta",
            "doc_count": 5
          },
          {
            "key": "Ashish Deora",
            "doc_count": 1
          },
          {
            "key": "Asmita Dubey",
            "doc_count": 1
          },
          {
            "key": "Balbir Singh",
            "doc_count": 9
          },
          {
            "key": "Delnaz Elavia",
            "doc_count": 3
          },
          {
            "key": "Geetanjali Jagannathan",
            "doc_count": 7
          },
          {
            "key": "Gurab Virk",
            "doc_count": 1
          },
          {
            "key": "Kanul Goenka",
            "doc_count": 4
          },
          {
            "key": "Keyuri Singh",
            "doc_count": 3
          },
          {
            "key": "Mamta Jashnani",
            "doc_count": 3
          },
          {
            "key": "Manavi Baraya",
            "doc_count": 4
          },
          {
            "key": "NA",
            "doc_count": 2
          },
          {
            "key": "Niraj Salot",
            "doc_count": 2
          },
          {
            "key": "Reba Coelho",
            "doc_count": 5
          },
          {
            "key": "Rijal Kadakia",
            "doc_count": 8
          },
          {
            "key": "Rohit Pimpley",
            "doc_count": 3
          },
          {
            "key": "Snehal Dalvi",
            "doc_count": 1
          },
          {
            "key": "Suraj Jadhav",
            "doc_count": 1
          },
          {
            "key": "Udita Mehta",
            "doc_count": 2
          },
          {
            "key": "Yeshasvini Ramaswamy",
            "doc_count": 11
          }
        ]
      ],
      [
        "Tenure",
        [
          {
            "key": "",
            "doc_count": 1
          },
          {
            "key": "1 year - 2 years",
            "doc_count": 29
          },
          {
            "key": "2 years - 5 years",
            "doc_count": 23
          },
          {
            "key": "5 years or more",
            "doc_count": 13
          },
          {
            "key": "6 months - 1 year",
            "doc_count": 20
          },
          {
            "key": "Less than 6 months",
            "doc_count": 17
          },
          {
            "key": "NA",
            "doc_count": 2
          }
        ]
      ],
      [
        "Age Group",
        [
          {
            "key": "25 or younger",
            "doc_count": 33
          },
          {
            "key": "26 to 34 years",
            "doc_count": 48
          },
          {
            "key": "35 years and above",
            "doc_count": 21
          },
          {
            "key": "NA",
            "doc_count": 2
          }
        ]
      ],
      [
        "Experienced-Fresher",
        [
          {
            "key": "Experienced",
            "doc_count": 77
          },
          {
            "key": "Fresher",
            "doc_count": 27
          }
        ]
      ],
      [
        null,
        [
          {
            "key": "",
            "doc_count": 102
          }
        ]
      ],
      [
        null,
        [
          {
            "key": "",
            "doc_count": 102
          }
        ]
      ]
    ];
  }

}
