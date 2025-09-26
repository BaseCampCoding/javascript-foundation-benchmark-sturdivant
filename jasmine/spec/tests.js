describe('Person Class and functions', () => {
    let originalConsoleLog;

    beforeEach(() => {
        // Store the original console.log method
        originalConsoleLog = console.log;
        // Replace console.log with a spy to capture log messages
        spyOn(console, 'log').and.callThrough();
        // Clear the global bookings array before each test to avoid side effects
        if (typeof bookings !== 'undefined' && Array.isArray(bookings)) {
            bookings.length = 0;
        }
    });

    afterEach(() => {
        // Restore the original console.log method after each test
        console.log = originalConsoleLog;
    });

    it('should create a Booking object with correct properties', () => {
        // Arrange
        const booking = new Booking("Test User", "Rome", "2025-10-10", "train");

        // Act and Assert
        expect(booking.travelerName).toBe("Test User");
        expect(booking.destination).toBe("Rome");
        expect(booking.date).toBe("2025-10-10");
        expect(booking.type).toBe("train");
    });
    it('should add a Booking object with correct properties', () => {
        // Arrange
        //add a booking object using the addBooking function
        const booking = new Booking("Brittany", "Italy", "2025-10-11", "bus");
        addBooking(booking);
        // Act and Assert
        expect(bookings).toContain(booking);
  
    });

     it('should remove a Booking object with correct properties', () => {
        // Arrange
        // Add the booking to the global bookings array before removing
        const booking = new Booking("Brittany", "Italy", "2025-10-11", "bus");
        addBooking(booking);
        // Act
        removeBooking(booking);
        // Assert
        expect(bookings).not.toContain(booking);

    });

    it('should display details of all bookings', () => {
        // Arrange
        const testBookings = [
            new FlightBooking("Alice Smith", "Paris", "2025-10-15", "AF123"),
            new Booking("Bob Jones", "Berlin", "2025-11-01", "train"),
            new FlightBooking("Cara Lee", "Tokyo", "2025-12-05", "JL456"),
        ];

        // Act
        displayBooking(testBookings);

        // Assert
        expect(console.log).toHaveBeenCalledWith('All bookings:');
        expect(console.log).toHaveBeenCalledWith('Alice Smith booked a flight to Paris on 2025-10-15 (Flight Number: AF123).')
        expect(console.log).toHaveBeenCalledWith('Bob Jones booked a train to Berlin on 2025-11-01.');
        expect(console.log).toHaveBeenCalledWith('Cara Lee booked a flight to Tokyo on 2025-12-05 (Flight Number: JL456).');
        
    });

    it('should filter and print details of bookings from a specific type', () => {
        // Arrange
        const testBookings = [
            new FlightBooking("Alice Smith", "Paris", "2025-10-15", "AF123"),
            new Booking("Bob Jones", "Berlin", "2025-11-01", "train"),
            new FlightBooking("Cara Lee", "Tokyo", "2025-12-05", "JL456"),
        ];


        // Act
        findBookingsByType('flight', testBookings)
        // Assert
        expect(console.log).toHaveBeenCalledWith('All flight bookings:');
        expect(console.log).toHaveBeenCalledWith('Alice Smith booked a flight to Paris on 2025-10-15 (Flight Number: AF123).');
        expect(console.log).toHaveBeenCalledWith('Cara Lee booked a flight to Tokyo on 2025-12-05 (Flight Number: JL456).');
    });
});

