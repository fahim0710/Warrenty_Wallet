import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { prisma } from "./configs/prisma";

const app = express();

app.use(
    cors({
        origin: process.env.FRONTEND_URL,
        credentials: true,
    })
);

app.use(helmet());

app.use(morgan("dev"));

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Warranty Wallet API Running");
});

app.get("/health", async (_, res) => {
    try {
        await prisma.$queryRaw`SELECT 1`;

        res.status(200).json({
            success: true,
            database: "connected",
        });
    } catch {
        res.status(500).json({
            success: false,
            database: "failed",
        });
    }
});

export default app; 