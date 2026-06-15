import express from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import cookieParser from "cookie-parser";

const app = express();

app.use(
    cors({
        origin: ["http://localhost:3000"],
        credentials: true,
    })
);

app.use(helmet());
app.use(compression());

app.use(express.json());
app.use(cookieParser());

app.get("/", (_req, res) => {
    res.status(200).json({
        success: true,
        message: "Warranty Wallet API Running",
    });
});

export default app;