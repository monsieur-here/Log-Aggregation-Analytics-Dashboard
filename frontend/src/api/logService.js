import logApiClient from "./ApiService"

const logService = {

    // Crucial for receiving logs from other sources or services
    createLog: async (logData) => {
        try{
            const res = await logApiClient.post("/logs", logData);
            return res.data;
        } catch (error) {
            console.error("Error creating log:", error);
            throw error;
        }
    },

    // Aiming to enhance Version Tracking
    postBuildLog: async (versionData, description) => {
        try{
            const buildData = {
                "level": "INFO",
                "message": `Build deployment: ${description}`,
                "buildVersion": versionData.version,
                "timestamp": new Date().toISOString()
            }
            return await logService.createLog(buildData);
        } catch (error) {
            console.error("Error posting build log:", error);
            throw error;
        }
    },

    getLogs: async () => {
        try{
            const res = await logApiClient.get("/logs");
            return res.data;
        } catch (error) {
            console.error("Error displaying logs:", error);
            throw error;
        }
    },

    getLogById: async (log_id) => {
        try{
            const res = await logApiClient.get(`/logs/${log_id}`);
            return res.data;
        } catch (error) {
            console.error("Error displaying log by ID:", error);
            throw error;
        }
    },

    deleteLog: async (log_id) => {
        try{
            const res = await logApiClient.delete(`/logs/${log_id}`);
            return res.data;
        } catch (error) {
            console.error("Error deleting log:", error);
            throw error;
        }
    }
}

export default logService;