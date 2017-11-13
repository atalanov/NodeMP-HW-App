import expressQSParser from 'express-qs-parser';

const qsParserMiddleware = expressQSParser({
    params: { 
        filters: /([\w-_]+)(\>|<|\=|\!=)([\w_-]+)/g, 
        order: /(-?)([\w\s]+)/
    },
    storage: 'parsedQuery' 
});

export default qsParserMiddleware;