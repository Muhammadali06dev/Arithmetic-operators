/*=================Arifmetik Operatorlar bo'yicha masalalar==================*/

// Begin-1 -------------------------------------------------------------------

// function begin1(a, b) {
//    const yuza = a * b
//    const perimetr = 2 * (a + b)
//    return {
//       yuza,
//       perimetr
//    }
// }
// console.log(`To'rtbo'rchakning yuzasi: ${begin1(5,5).yuza}, perimetri: ${begin1(5,5).perimetr}`)


// Begin-2 -------------------------------------------------------------------

// function begin2(d) {
//    const uzunligi = Math.PI * d
//    const yuzasi = Math.PI * ((d/2)**2)
//    return {
//       uzunligi,
//       yuzasi
//    }
// }
// console.log(`Aylananing uzunligi: ${begin2(5).uzunligi}, yuzasi: ${begin2(5).yuzasi}`)


// Begin-3 -------------------------------------------------------------------

// function begin3(a) {
//    const hajmi = a ** 3
//    const yuzasi = 6 * (a ** 2)
//    return {
//       hajmi,
//       yuzasi
//    }
// }
// console.log(`Kubning hajmi:${begin3(5).hajmi}, yuzasi: ${begin3(5).yuzasi} `)


// Begin-4 -------------------------------------------------------------------

// function begin4(a, b, c) {
//    const hajmi = a * b * c
//    const yuzasi = 2 * (a * b + b * c + c * a)
//    return {
//       hajmi,
//       yuzasi
//    }
// }
// console.log(`Parallelipedning hajmi: ${begin4(2, 3, 4).hajmi}, yuzasi: ${begin4(2, 3, 4).yuzasi} `)


// Begin-5 -------------------------------------------------------------------

// function begin5(a, b) {
//    const m = (a + b)/2
//    return m
// }
// console.log("O'rta arifmetigi:", begin5(3,5))


// Begin-6 -------------------------------------------------------------------

// function begin6(a, b) {
//    const c = (a ** 2 + b ** 2) ** (1 / 2)
//    const p = a + b + c
//    return { c, p }
// }
// console.log(`Uchburchakning gipotenuzasi: ${begin6(3,4).c}, perimetri: ${begin6(3,4).p}`)


// Begin-7 -------------------------------------------------------------------

// function begin7(r1, r2) {
//    const s1 = Math.PI * (r1 ** 2)
//    const s2 = Math.PI * (r2 ** 2)
//    const s = s1 - s2
//    return s
// }
// console.log("Ayirma: ", begin7(6,5))


// Begin-8 -------------------------------------------------------------------

// function begin8(l) {
//    const r = l / (2 * Math.PI)
//    const s = Math.PI * (r ** 2)
//    return {
//       r,
//       s
//    }
// }
// console.log("Aylananing radiusi:", begin8(34).r, ", yuzasi: ", begin8(34).s)


// Begin-9 -------------------------------------------------------------------

// function begin9(x1, y1, x2, y2) {
//    const l = ((x1 - x2) ** 2 + (y1 - y2) ** 2) ** (1 / 2)
//    return l
// }

// console.log("Masofa: ", begin9(2,4,2,5))


// Begin-10 -------------------------------------------------------------------

// function begin10(a, b, c) {
//    const frag = a
//    a = c
//    c = b
//    b = frag
//    return { a, b, c }

// }
// console.log(begin10(2, 3, 4))


// Begin-11 -------------------------------------------------------------------

// function begin11(x) {
//    return 4 * (x - 3) ** 6 - 7 * (x - 3) ** 3 + 2
// }
// console.log(begin11(4))


// Begin-12 -------------------------------------------------------------------

// function begin12(a, daraja) {
//    if (daraja == 1) {
//       return a
//    } else if (daraja == 0){
//       return 1
//    } else if (daraja < 0) {
//       daraja = Math.abs(daraja)
//       return 1 / (a * begin12(a, daraja - 1))
//    } else {
//       return a * begin12(a, daraja - 1)
//    }
// }
// console.log(begin12(5, 3))


// Begin-13 -------------------------------------------------------------------

// function begin13(tf) {
//    return (tf - 32) * (5/9)
// }
// console.log("TS: " ,begin13(126))



// Begin-14 -------------------------------------------------------------------

// function begin14(x, a, y, b) {
//    const kg1 = a / x
//    const kg2 = b / y
//    return kg1 - kg2
// }
// console.log(`Shokolad konfetdan ${begin14(2, 10000, 5, 20000)}so'm qimmat!`)


// Begin-15 -------------------------------------------------------------------

// function begin15(x, a, y, b) {
//    return (x * a) + (y * b)
// }
// console.log(begin15(3, 10000, 2, 9000))


// Integer-1 -------------------------------------------------------------------

// function integer1(a) {
//    const birlik = a % 10
//    const onlik = Math.trunc((a % 100) / 10)
//    return {birlik, onlik}
// }
// console.log(integer1(354))


// Integer-2 -------------------------------------------------------------------

// function integer2(a) {
//    return (Math.trunc(a / 100) + (Math.trunc((a % 100) / 10)) + (a % 10))
// }
// console.log(integer2(354))


// Integer-3 -------------------------------------------------------------------

// function integer3(a) {
//    return +`${(a % 10)}${Math.trunc((a % 100) / 10)}${Math.trunc(a / 100)}`
// }
// console.log(integer3(354))


// Integer-4 -------------------------------------------------------------------

// function integer4(a) {
//    return +`${Math.trunc((a % 100) / 10)}${Math.trunc(a / 100)}${(a % 10)}`
// }
// console.log(integer4(354))

// Integer-5 -------------------------------------------------------------------

// function integer5(a) {
//    return +`${Math.trunc(a / 100)}${(a % 10)}${Math.trunc((a % 100) / 10)}`
// }
// console.log(integer5(354))


// Integer-6-------------------------------------------------------------------

// function integer6(a) {
//    return Math.trunc(a / 1000) % 10
// }
// console.log(integer6(198123))


// Integer-7 -------------------------------------------------------------------

// function integer7(s) {
//    return s / 60
// }
// console.log(integer7(3600))


// Integer-8 -------------------------------------------------------------------

// function integer8(s) {
//    return s / 60 / 60
// }
// console.log(integer8(3600))


// Integer-9 -------------------------------------------------------------------

// function integer9(s) {
//    const minut = (s / 60) % 60
//    const soat = Math.trunc(s / 60 / 60)
//    return { soat, minut }
// }
// console.log(integer9(5400))

// Integer-10 -------------------------------------------------------------------

// function integer10(s) {
//    const soat = Math.trunc(s / 60 / 60)
//    const sekund = s % 60
//    return { soat, sekund }
// }
// console.log(integer10(3630))