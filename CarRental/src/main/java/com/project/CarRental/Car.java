package com.project.CarRental;

public class Car {
	
	private String carId;
	private String carBrand;
	private String carModel;
	private double basePrice;
	private boolean Available;
	
	/**
	 * @param carId
	 * @param carBrand
	 * @param carModel
	 * @param basePrice
	 */
	public Car(String carId, String carBrand, String carModel, double basePrice) {
		super();
		this.carId = carId;
		this.carBrand = carBrand;
		this.carModel = carModel;
		this.basePrice = basePrice;
		this.Available = true;
	}

	public String getCarId() {
		return carId;
	}
	
	public String getCarModel() {
		return carModel;
	}
	
	public String getCarBrand() {
		return carBrand;
	}
	
	public boolean isAvailable() {
		return Available;
	}
	public double totalRent(int nDays) {
		return basePrice*nDays;
	}
	
	public String booked() {
		Available = false;
		return "The car has been booked Successfully. Thank You !";
	}
	
	


	
	
	
	
	
	
	
	

}
