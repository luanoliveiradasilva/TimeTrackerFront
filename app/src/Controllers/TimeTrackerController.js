import ApiService from '../Services/ApiService';
import TimeTracker from '../Models/TimeTracker';


class TimeTrackerController {
  async registerTimeEntry(timeEntries) {

    const timeEntryModel = new TimeTracker(
      timeEntries.dateTraker,
      timeEntries.start,
      timeEntries.break,
      timeEntries.clockIn,
      timeEntries.clockOut
    );

    try {
      const result = await ApiService.registerTimeEntryService(timeEntryModel);
      
      return result;

    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

export default TimeTrackerController;
