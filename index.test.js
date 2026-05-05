const { arithmeticTerm, arithmeticSum, geometricTerm, geometricSum, calculateOptionBSalary } = require('./index');

describe('Arithmetic Sequences and Series', () => {
    test('Calculates 15th term of arithmetic sequence (u1=20, d=4)', () => {
        expect(arithmeticTerm(20, 4, 15)).toBeCloseTo(76);
    });
    test('Calculates sum of 15 terms of arithmetic series (u1=20, d=4)', () => {
        expect(arithmeticSum(20, 4, 15)).toBeCloseTo(720);
    });
});

describe('Geometric Sequences and Series', () => {
    test('Calculates 5th term of geometric sequence (u1=2.0, r=0.8)', () => {
        expect(geometricTerm(2.0, 0.8, 5)).toBeCloseTo(0.8192);
    });
    test('Calculates sum of 5 terms of geometric series (u1=2.0, r=0.8)', () => {
        expect(geometricSum(2.0, 0.8, 5)).toBeCloseTo(6.7232);
    });
});

describe('Synthesis: Salary Calculation', () => {
    test('Calculates Option B Salary (Start: 40000, Raise: 5%, Year: 10)', () => {
        // Ratio should be 1.05, n=10. u_10 = 40000 * 1.05^9
        expect(calculateOptionBSalary(40000, 5, 10)).toBeCloseTo(62053.13, 1);
    });
});
