var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import pgPromise from 'pg-promise';
const pgp = pgPromise();
// db configuration object
const cn = {
    host: 'localhost',
    port: 5432,
    database: 'eshop',
    user: 'postgres',
    password: 'Bursucprajit1',
    max: 30
};
const db = pgp(cn);
export const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const rows = yield db.any('select * from product');
        console.log(rows);
        res.status(200).json(rows);
    }
    catch (err) {
        console.log(err);
    }
});
