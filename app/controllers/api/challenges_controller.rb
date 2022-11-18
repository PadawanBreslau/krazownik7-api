class Api::ChallengesController < ApplicationController
  def index
    challenges = Challenge.all

    render(json: { challenges: challenges})
  end

  def show
    challenge = Challenge.find_by(id: params[:id])

    render(json: { challenges: challenges})
  end
end
