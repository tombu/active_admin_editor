class Admin::AssetsController < ApplicationController
  respond_to :html, :js

  def index
    @assets = ActiveAdmin::Asset.all
    respond_with @assets
  end

  def create
    @asset = ActiveAdmin::Asset.new(params[:asset])
    if @asset.save
      flash[:notice] = "Asset was successfully created."
    end
    respond_with @asset
  end

  def update
    @asset = ActiveAdmin::Asset.find(params[:id])
    if @asset.update_attributes(params[:asset])
      flash[:notice] = "Asset was successfully updated."
    end
    respond_with @asset
  end

  def destroy
    @asset = ActiveAdmin::Asset.find(params[:id])
    @asset.destroy
    respond_with @asset
  end
end
