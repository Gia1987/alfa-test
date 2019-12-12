import {
    readLS, setItemLS, deleteLS, isLSEmpty, removeAllLSs
} from '../localStorage';

const key = 'test';
const value = 'abc';

describe('localStorage', () => {
    describe('deleteLS', () => {
        it('Should delete cookie', () => {
            setItemLS(key, value);
            deleteLS(key);

            expect(localStorage.getItem(key)).toEqual(null);
        });
    });

    describe('upsert and readLS', () => {
        it('Should read cookie', async () => {
            await setItemLS(key, value);
            const cookieValue = readLS(key);

            expect(cookieValue).toBe(value);
            deleteLS(key);
        });
    });

    describe('isLSEmpty', () => {
        it('Should return false', () => {
            setItemLS(key, value);
            expect(isLSEmpty(key)).toBe(false);
        });

        it('Should return false', () => {
            setItemLS(key, null);
            expect(isLSEmpty(key)).toBe(false);
        });
    });

    describe('removeAllLSs', () => {
        it('Should return true', () => {
            removeAllLSs();
            expect(localStorage).toMatchObject({});
        });
    });
});
