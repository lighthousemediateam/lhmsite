// app/photo/photoData.ts

export type PhotoSpan = 'wide' | 'tall' | 'normal';

export interface PhotoItem {
    url: string;
    span: PhotoSpan;
}

export const photoUrls: PhotoItem[] = [
    { url: 'https://lhmcollective.b-cdn.net/Jewelry/4B6A2927-Edit.jpg', span: 'wide' }, // (1)
    { url: 'https://lhmcollective.b-cdn.net/Doctors/4B6A4422.jpg', span: 'normal' }, // (2)
    { url: 'https://lhmcollective.b-cdn.net/Clothing/4B6A2101-Edit.jpg', span: 'tall' }, // (3)
    { url: 'https://lhmcollective.b-cdn.net/Restaurant/Charles%20Dishes%205%20Course-22.jpg', span: 'normal' }, // (4)
    { url: 'https://lhmcollective.b-cdn.net/Real%20Estate/4B6A7575.jpg', span: 'wide' }, // (5)
    { url: 'https://lhmcollective.b-cdn.net/Editorial/AY4I0604-Edit.jpg', span: 'normal' }, // (6)
    { url: 'https://lhmcollective.b-cdn.net/MV/DY9A2791-Edit.jpg', span: 'tall' }, // (7)
    { url: 'https://lhmcollective.b-cdn.net/Products/4B6A0318.jpg', span: 'normal' }, // (8)
    { url: 'https://lhmcollective.b-cdn.net/Restaurant/Friends%20and%20Family-24.jpg', span: 'wide' }, // (9)
    { url: 'https://lhmcollective.b-cdn.net/Cars/4B6A2515.jpg', span: 'normal' }, // (10)


    { url: 'https://lhmcollective.b-cdn.net/Clothing/4B6A2235-Edit.jpg', span: 'wide' }, // (11)
    { url: 'https://lhmcollective.b-cdn.net/Products/4B6A0321-Edit-Edit.jpg', span: 'tall' }, // (12)
    { url: 'https://lhmcollective.b-cdn.net/MV/DY9A2907.jpg', span: 'normal' }, // (13)
    { url: 'https://lhmcollective.b-cdn.net/Doctors/4B6A4382.jpg', span: 'normal' }, // (14)
    { url: 'https://lhmcollective.b-cdn.net/Jewelry/4B6A2952-Edit.jpg', span: 'wide' }, // (15)
    { url: 'https://lhmcollective.b-cdn.net/Editorial/AY4I0582.jpg', span: 'normal' }, // (16)
    { url: 'https://lhmcollective.b-cdn.net/Cars/4B6A2529.jpg', span: 'tall' }, // (17)
    { url: 'https://lhmcollective.b-cdn.net/Real%20Estate/4B6A7573-Edit-Edit.jpg', span: 'normal' }, // (18)
    { url: 'https://lhmcollective.b-cdn.net/REIGN%20Photos/DY9A1466.jpg', span: 'normal' }, // (19)
    { url: 'https://lhmcollective.b-cdn.net/Restaurant/Charles%20Dishes%205%20Course-25.jpg', span: 'wide' }, // (20)


    { url: 'https://lhmcollective.b-cdn.net/Doctors/4B6A4384.jpg', span: 'normal' }, // (21)
    { url: 'https://lhmcollective.b-cdn.net/Clothing/4B6A2116-Edit.jpg', span: 'tall' }, // (22)
    { url: 'https://lhmcollective.b-cdn.net/Products/4B6A0287-Edit.jpg', span: 'normal' }, // (23)
    { url: 'https://lhmcollective.b-cdn.net/Editorial/AY4I1089-Edit.jpg', span: 'wide' }, // (24)
    { url: 'https://lhmcollective.b-cdn.net/Restaurant/Charles%20Dishes%205%20Course-3.jpg', span: 'normal' }, // (25)
    { url: 'https://lhmcollective.b-cdn.net/Real%20Estate/4B6A7568.jpg', span: 'normal' }, // (26)
    { url: 'https://lhmcollective.b-cdn.net/REIGN%20Photos/DY9A1661.jpg', span: 'tall' }, // (27)
    { url: 'https://lhmcollective.b-cdn.net/REIGN%20Photos/DY9A1357.jpg', span: 'normal' }, // (28)
    { url: 'https://lhmcollective.b-cdn.net/Jewelry/4B6A2971-Edit.jpg', span: 'normal' }, // (29)
    { url: 'https://lhmcollective.b-cdn.net/MV/DY9A2879.jpg', span: 'wide' }, // (30)


    { url: 'https://lhmcollective.b-cdn.net/Clothing/4B6A2395-Edit-2.jpg', span: 'normal' }, // (31)
    { url: 'https://lhmcollective.b-cdn.net/Doctors/4B6A4436.jpg', span: 'wide' }, // (32)
    { url: 'https://lhmcollective.b-cdn.net/Products/4B6A0325-Edit-Edit.jpg', span: 'tall' }, // (33)
    { url: 'https://lhmcollective.b-cdn.net/REIGN%20Photos/DY9A6234.jpg', span: 'normal' }, // (34)
    { url: 'https://lhmcollective.b-cdn.net/Jewelry/4B6A5015.jpg', span: 'wide' }, // (35)
    { url: 'https://lhmcollective.b-cdn.net/Cars/4B6A2533.jpg', span: 'normal' }, // (36)
    { url: 'https://lhmcollective.b-cdn.net/Cars/4B6A2543.jpg', span: 'tall' }, // (37)
    { url: 'https://lhmcollective.b-cdn.net/Editorial/DY9A0018-Edit.jpg', span: 'normal' }, // (38)
    { url: 'https://lhmcollective.b-cdn.net/MV/DY9A2983-Edit.jpg', span: 'normal' }, // (39)
    { url: 'https://lhmcollective.b-cdn.net/Real%20Estate/4B6A7613.jpg', span: 'wide' }, // (40)


    { url: 'https://lhmcollective.b-cdn.net/Clothing/4B6A2334-Edit.jpg', span: 'normal' }, // (41)
    { url: 'https://lhmcollective.b-cdn.net/Jewelry/AY4I4595-2.jpg', span: 'tall' }, // (42)
    { url: 'https://lhmcollective.b-cdn.net/Restaurant/Dans%20Dishes%205%20Course-1.jpg', span: 'normal' }, // (43)
    { url: 'https://lhmcollective.b-cdn.net/Products/AY4I8345-Edit-2.jpg', span: 'wide' }, // (44)
    { url: 'https://lhmcollective.b-cdn.net/REIGN%20Photos/HMB04295.jpg', span: 'normal' }, // (45)
    { url: 'https://lhmcollective.b-cdn.net/Doctors/4B6A4514.jpg', span: 'tall' }, // (46)
    { url: 'https://lhmcollective.b-cdn.net/Cars/B56I0050-Edit.jpg', span: 'normal' }, // (47)
    { url: 'https://lhmcollective.b-cdn.net/Editorial/DY9A6252.jpg', span: 'wide' }, // (48)
    { url: 'https://lhmcollective.b-cdn.net/MV/DY9A3138.jpg', span: 'normal' }, // (49)
    { url: 'https://lhmcollective.b-cdn.net/Real%20Estate/4B6A7587.jpg', span: 'normal' }, // (50)
    { url: 'https://lhmcollective.b-cdn.net/Restaurant/Charles%20Dishes%205%20Course-22.jpg', span: 'normal' }, // (51)
    { url: 'https://lhmcollective.b-cdn.net/Products/AY4I8367.jpg', span: 'tall' }, // (52)
    { url: 'https://lhmcollective.b-cdn.net/MV/DY9A2879.jpg', span: 'normal' }, // (53)
    { url: 'https://lhmcollective.b-cdn.net/Real%20Estate/4B6A7607.jpg', span: 'wide' }, // (54)
    { url: 'https://lhmcollective.b-cdn.net/Editorial/AY4I1089-Edit.jpg', span: 'normal' }, // (55)
    { url: 'https://lhmcollective.b-cdn.net/Restaurant/Food%20Shoot%201-03020.jpg', span: 'normal' }, // (56)
    { url: 'https://lhmcollective.b-cdn.net/Jewelry/4B6A2933-Edit.jpg', span: 'wide' }, // (57)
    { url: 'https://lhmcollective.b-cdn.net/Real%20Estate/4B6A7598.jpg', span: 'normal' }, // (58)
    { url: 'https://lhmcollective.b-cdn.net/Doctors/4B6A4382.jpg', span: 'tall' }, // (59)
    { url: 'https://lhmcollective.b-cdn.net/Cars/4B6A2533.jpg', span: 'normal' }, // (60)
    { url: 'https://lhmcollective.b-cdn.net/Clothing/4B6A2235-Edit.jpg', span: 'wide' }, // (61)
    { url: 'https://lhmcollective.b-cdn.net/REIGN%20Photos/DY9A1357.jpg', span: 'normal' }, // (62)
    { url: 'https://lhmcollective.b-cdn.net/MV/DY9A2784.jpg', span: 'tall' }, // (63)
    { url: 'https://lhmcollective.b-cdn.net/Products/4B6A0342-Edit.jpg', span: 'normal' }, // (64)
    { url: 'https://lhmcollective.b-cdn.net/Editorial/AY4I0604-Edit.jpg', span: 'normal' }, // (65)


    { url: 'https://lhmcollective.b-cdn.net/Jewelry/AY4I4416.jpg', span: 'wide' }, // 66
    { url: 'https://lhmcollective.b-cdn.net/Restaurant/Friends%20and%20Family-26.jpg', span: 'normal' }, // 67
    { url: 'https://lhmcollective.b-cdn.net/Real%20Estate/4B6A7568.jpg', span: 'tall' }, // 68
    { url: 'https://lhmcollective.b-cdn.net/Doctors/4B6A4583.jpg', span: 'normal' }, // 69
    { url: 'https://lhmcollective.b-cdn.net/REIGN%20Photos/DY9A1620.jpg', span: 'wide' }, // 70
    { url: 'https://lhmcollective.b-cdn.net/Cars/4B6A2529.jpg', span: 'normal' }, // 71
    { url: 'https://lhmcollective.b-cdn.net/MV/DY9A3138.jpg', span: 'normal' }, // 72
    { url: 'https://lhmcollective.b-cdn.net/Clothing/4B6A2116-Edit.jpg', span: 'tall' }, // 73
    { url: 'https://lhmcollective.b-cdn.net/Products/AY4I8332-Edit-2.jpg', span: 'normal' }, // 74
    { url: 'https://lhmcollective.b-cdn.net/Cars/B56I0035.jpg', span: 'normal' }, // 75
    { url: 'https://lhmcollective.b-cdn.net/Doctors/4B6A4436.jpg', span: 'wide' }, // 76
    { url: 'https://lhmcollective.b-cdn.net/Restaurant/Charles%20Dishes%205%20Course-34.jpg', span: 'tall' }, // 77
    { url: 'https://lhmcollective.b-cdn.net/Real%20Estate/4B6A7575.jpg', span: 'normal' }, // 78
    { url: 'https://lhmcollective.b-cdn.net/Jewelry/AY4I4663.jpg', span: 'wide' }, // 79
    { url: 'https://lhmcollective.b-cdn.net/Products/AY4I8394-Edit.jpg', span: 'normal' }, // 80
    { url: 'https://lhmcollective.b-cdn.net/MV/DY9A3097-Enhanced-NR.jpg', span: 'normal' }, // 81
    { url: 'https://lhmcollective.b-cdn.net/REIGN%20Photos/DY9A3073.jpg', span: 'tall' }, // 82
    { url: 'https://lhmcollective.b-cdn.net/Clothing/4B6A2334-Edit.jpg', span: 'normal' }, // 83
    { url: 'https://lhmcollective.b-cdn.net/Editorial/DY9A4300.jpg', span: 'normal' }, // 84


    { url: 'https://lhmcollective.b-cdn.net/Doctors/4B6A4514.jpg', span: 'wide' }, // 85
    { url: 'https://lhmcollective.b-cdn.net/Restaurant/Friends%20and%20Family-14.jpg', span: 'normal' }, // 86
    { url: 'https://lhmcollective.b-cdn.net/Jewelry/AY4I4448.jpg', span: 'tall' }, // 87
    { url: 'https://lhmcollective.b-cdn.net/Products/4B6A0326.jpg', span: 'normal' }, // 88
    { url: 'https://lhmcollective.b-cdn.net/Clothing/4B6A9283.jpg', span: 'wide' }, // 89
    { url: 'https://lhmcollective.b-cdn.net/Real%20Estate/4B6A7579.jpg', span: 'normal' }, // 90
    { url: 'https://lhmcollective.b-cdn.net/REIGN%20Photos/DY9A6009.jpg', span: 'normal' }, // 91
    { url: 'https://lhmcollective.b-cdn.net/MV/DY9A2883.jpg', span: 'tall' }, // 92
    { url: 'https://lhmcollective.b-cdn.net/Cars/4B6A2531-Edit.jpg', span: 'normal' }, // 93
    { url: 'https://lhmcollective.b-cdn.net/Restaurant/Friends%20and%20Family-17.jpg', span: 'normal' }, // 94
    { url: 'https://lhmcollective.b-cdn.net/Real%20Estate/4B6A7629.jpg', span: 'wide' }, // 95
    { url: 'https://lhmcollective.b-cdn.net/Jewelry/4B6A4974-Edit.jpg', span: 'tall' }, // 96
    { url: 'https://lhmcollective.b-cdn.net/Clothing/4B6A2116-Edit.jpg', span: 'normal' }, // 97
    { url: 'https://lhmcollective.b-cdn.net/Products/4B6A0287-Edit.jpg', span: 'wide' }, // 98
    { url: 'https://lhmcollective.b-cdn.net/REIGN%20Photos/DY9A4644.jpg', span: 'normal' }, // 99
    { url: 'https://lhmcollective.b-cdn.net/Cars/4B6A2534.jpg', span: 'normal' }, // 100
    { url: 'https://lhmcollective.b-cdn.net/Editorial/DY9A9978.jpg', span: 'tall' }, // 101
    { url: 'https://lhmcollective.b-cdn.net/MV/DY9A2907.jpg', span: 'normal' }, // 102
    { url: 'https://lhmcollective.b-cdn.net/Doctors/4B6A4384.jpg', span: 'normal' }, // 103


    { url: 'https://lhmcollective.b-cdn.net/Restaurant/Dans%20Dishes%205%20Course-20.jpg', span: 'wide' }, // 104
    { url: 'https://lhmcollective.b-cdn.net/Real%20Estate/4B6A7605.jpg', span: 'normal' }, // 105
    { url: 'https://lhmcollective.b-cdn.net/Clothing/4B6A9272.jpg', span: 'tall' }, // 106
    { url: 'https://lhmcollective.b-cdn.net/Jewelry/4B6A5015.jpg', span: 'normal' }, // 107
    { url: 'https://lhmcollective.b-cdn.net/REIGN%20Photos/DY9A8707.jpg', span: 'wide' }, // 108
    { url: 'https://lhmcollective.b-cdn.net/Cars/4B6A2524.jpg', span: 'normal' }, // 109
    { url: 'https://lhmcollective.b-cdn.net/Doctors/4B6A4436.jpg', span: 'normal' }, // 110
    { url: 'https://lhmcollective.b-cdn.net/Products/4B6A0321-Edit-Edit.jpg', span: 'tall' }, // 111
    { url: 'https://lhmcollective.b-cdn.net/Editorial/DY9A9963.jpg', span: 'normal' }, // 112
    { url: 'https://lhmcollective.b-cdn.net/MV/DY9A3176.jpg', span: 'wide' }, // 113
    { url: 'https://lhmcollective.b-cdn.net/Doctors/4B6A4422.jpg', span: 'normal' }, // 114
    { url: 'https://lhmcollective.b-cdn.net/Restaurant/Charles%20Dishes%205%20Course-22.jpg', span: 'normal' }, // 115
    { url: 'https://lhmcollective.b-cdn.net/Clothing/4B6A2304-Edit-Edit-Edit.jpg', span: 'tall' }, // 116
    { url: 'https://lhmcollective.b-cdn.net/REIGN%20Photos/DY9A6234.jpg', span: 'normal' }, // 117
    { url: 'https://lhmcollective.b-cdn.net/Cars/B56I0050-Edit.jpg', span: 'wide' }, // 118
    { url: 'https://lhmcollective.b-cdn.net/Products/AY4I8385-Edit.jpg', span: 'normal' }, // 119
    { url: 'https://lhmcollective.b-cdn.net/Real%20Estate/4B6A7607.jpg', span: 'tall' }, // 120
    { url: 'https://lhmcollective.b-cdn.net/Jewelry/AY4I4595-2.jpg', span: 'normal' }, // 121
    { url: 'https://lhmcollective.b-cdn.net/Editorial/DY9A4425.jpg', span: 'normal' }, // 122 



























];
